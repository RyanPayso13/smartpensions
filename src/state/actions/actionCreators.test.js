import * as ACTION_TYPES from "./actionTypes";
import * as actions from "./actionCreators";
import * as constants from "../../constants/index";

describe("Action Creators", () => {
  it("should increment the game count", () => {
    const payload = 0;
    const expectedAction = {
      type: ACTION_TYPES.INCREMENT_GAME_COUNT,
      payload
    };
    expect(actions.incrementGameCount(payload)).toEqual(expectedAction);
  });

  it("should set the selected resource", () => {
    const payload = constants.RESOURCE_LIST[0].name;
    const expectedAction = {
      type: ACTION_TYPES.SET_SELECTED_RESOURCE,
      payload
    };
    expect(actions.setSelectedResource(payload)).toEqual(expectedAction);
  });

  it("should increment the win count", () => {
    const payload = {
      id: 1
    };
    const expectedAction = {
      type: ACTION_TYPES.INCREMENT_WIN_COUNT_BY_PLAYER_ID,
      payload
    };
    expect(actions.incrementWinCount(payload)).toEqual(expectedAction);
  });
});
