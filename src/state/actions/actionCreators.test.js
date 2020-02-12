import * as ACTION_TYPES from "./actionTypes";
import * as actions from "./actionCreators";
import * as constants from "../../constants/index";

describe("Action Creators", () => {
  it("should set the game count", () => {
    const payload = 0;
    const expectedAction = {
      type: ACTION_TYPES.SET_GAME_COUNT,
      payload
    };
    expect(actions.setGameCount(payload)).toEqual(expectedAction);
  });

  it("should set the selected resource", () => {
    const payload = constants.RESOURCE_LIST[0].name;
    const expectedAction = {
      type: ACTION_TYPES.SET_RESOURCE,
      payload
    };
    expect(actions.setResource(payload)).toEqual(expectedAction);
  });

  it("should increment the win count", () => {
    const payload = {
      id: 1
    };
    const expectedAction = {
      type: ACTION_TYPES.SET_WIN_COUNT,
      payload
    };
    expect(actions.setWinCount(payload)).toEqual(expectedAction);
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
      type: ACTION_TYPES.SET_TOP_TRUMP,
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
      type: ACTION_TYPES.SET_ATTRIBUTE,
      payload
    };
    expect(actions.setAttribute(payload)).toEqual(expectedAction);
  });

  it("should reset the attributes", () => {
    const payload = {
      id: null,
      attribute: ""
    };
    const expectedAction = {
      type: ACTION_TYPES.SET_ATTRIBUTE,
      payload
    };
    expect(actions.setAttribute()).toEqual(expectedAction);
  });
});
