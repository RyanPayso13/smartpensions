import * as ACTION_TYPES from "./actionTypes";
import * as actions from "./actionCreators";
import * as CONSTANTS from "../../constants/index";

describe("Action Creators", () => {
  it("should initiate the game", () => {
    const payload = true;
    const expectedAction = {
      type: ACTION_TYPES.INITIATE_GAME,
      payload
    };
    expect(actions.initiateGame(payload)).toEqual(expectedAction);
  });

  it("should set the selected resource", () => {
    const payload = CONSTANTS.RESOURCE_LIST[0].name;
    const expectedAction = {
      type: ACTION_TYPES.SET_SELECTED_RESOURCE,
      payload
    };
    expect(actions.setSelectedResource(payload)).toEqual(expectedAction);
  });
});
