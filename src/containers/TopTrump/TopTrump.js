import React, { useEffect, useState, useContext, useCallback } from "react";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import * as constants from "../../constants/index";
import * as utils from "../../libs/utils";
import * as actions from "../../state/actions/actionCreators";
import Context from "../../state/context";
import TopTrumpAttributeList from "../../components/TopTrumpAttributeList/TopTrumpAttributeList";

const TopTrump = ({ id = null }) => {
  const { state, dispatch } = useContext(Context);
  const [listData, setListData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = useCallback(async () => {
    const result = [...constants.RESOURCE_LIST].find(
      el => el.name === state.selectedResource
    );
    const randomInt = utils.getRandomIntFromRange(1, result.count);
    const url = `${constants.API_BASE_URL}/${state.selectedResource}/${randomInt}`;

    setListData({});
    setIsError(false);
    setIsLoading(true);
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
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [state.selectedResource, dispatch, id]);

  const handleOnClick = item => {
    let winner = utils.determineGameWinner(state, id, listData, item);

    dispatch(actions.incrementWinCount(winner));
    dispatch(actions.setWinningAttribute({ id: winner, attribute: item }));
  };

  useEffect(() => {
    if (state.gameCounter > 0) {
      fetchData();
    }
  }, [state.gameCounter, fetchData]);

  return (
    <React.Fragment>
      {isLoading && <Spinner animation="border" variant="primary"></Spinner>}
      {isError && <Alert variant="danger">There has been an error!</Alert>}
      {listData && Object.keys(listData).length > 0 && (
        <TopTrumpAttributeList
          listData={listData}
          handleOnClick={handleOnClick}
        />
      )}
    </React.Fragment>
  );
};

export default TopTrump;
