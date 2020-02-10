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

  it("should set the current top trump for the player", () => {
    const payload = {
      id: 1,
      topTrump: {
        name: "Luke Skywalker",
        height: 186,
        mass: 85
      }
    };
    const expectedAction = {
      type: ACTION_TYPES.SET_TOP_TRUMP_BY_PLAYER_ID,
      payload
    };
    expect(actions.setTopTrump(payload)).toEqual(expectedAction);
  });

  it("should set the winning attribute", () => {
    const payload = {
      id: 1,
      attribute: "mass"
    };
    const expectedAction = {
      type: ACTION_TYPES.SET_WINNING_ATTRIBUTE_BY_PLAYER_ID,
      payload
    };
    expect(actions.setWinningAttribute(payload)).toEqual(expectedAction);
  });

  it("should reset the winning attribute", () => {
    const payload = {
      attribute: ""
    };
    const expectedAction = {
      type: ACTION_TYPES.RESET_WINNING_ATTRIBUTE,
      payload
    };
    expect(actions.resetWinningAttribute(payload)).toEqual(expectedAction);
  });
});
