import React, { useEffect, useState, useContext, useCallback } from "react";
import * as constants from "../../constants/index";
import * as utils from "../../libs/utils";
import * as actions from "../../state/actions/actionCreators";
import Context from "../../state/context";
import TopTrumpAttributeList from "../../components/TopTrumpAttributeList/TopTrumpAttributeList";

const TopTrump = ({ id = null }) => {
  const { state, dispatch } = useContext(Context);
  const [listData, setListData] = useState({});
  const fetchData = useCallback(async () => {
    const result = constants.RESOURCE_LIST.find(
      el => el.name === state.selectedResource
    );
    const randomInt = utils.getRandonIntFromRange(1, result.count);
    const url = `${constants.API_BASE_URL}/${state.selectedResource}/${randomInt}`;

    try {
      const result = await fetch(url);
      result.json().then(data => {
        if (data && data.detail === "Not found") {
          fetchData();
        } else {
          const result = utils.extractListData(state.selectedResource, data);
          setListData(result);
          dispatch(
            actions.setTopTrump({
              id: id,
              topTrump: result
            })
          );
        }
      });
    } catch (error) {
      // error handling
    } finally {
      // loading end
    }
  }, [state.selectedResource, dispatch, id]);

  const handleOnClick = item => {
    const opponent = [...state.players].find(player => player.id !== id);
    const opponentAttr = opponent.topTrump[item];
    const playerAttr = listData[item];

    let winner;

    if (Number.isNaN(playerAttr)) {
      winner = opponent.id;
    }

    if (Number.isNaN(opponentAttr)) {
      winner = id;
    }

    if (playerAttr > opponentAttr) {
      winner = id;
    } else {
      winner = opponent.id;
    }

    if (playerAttr === opponentAttr) {
      // draw
      return;
    }

    dispatch(actions.incrementWinCount(winner));
  };

  useEffect(() => {
    if (state.gameCounter > 0) {
      fetchData();
    }
  }, [state.gameCounter, fetchData]);

  return (
    listData &&
    Object.keys(listData).length > 0 && (
      <TopTrumpAttributeList
        listData={listData}
        handleOnClick={handleOnClick}
      />
    )
  );
};

export default TopTrump;
