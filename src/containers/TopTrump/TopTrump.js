import React, { useEffect, useState, useContext, useCallback } from "react";
import * as constants from "../../constants/index";
import * as utils from "../../libs/utils";
import Context from "../../state/context";

const TopTrump = () => {
  const { state } = useContext(Context);
  const [trumpData, setTrumpData] = useState({});
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
          setTrumpData(data);
        }
      });
    } catch (error) {
      // error handling
    } finally {
      // loading end
    }
  }, [state.selectedResource]);

  useEffect(() => {
    if (state.gameCounter > 0) {
      fetchData();
    }
  }, [state.gameCounter, fetchData]);

  return <p>Top Trump</p>;
};

export default TopTrump;
