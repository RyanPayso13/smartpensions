import * as ACTION_TYPES from "./actionTypes";
import * as actions from "./actionCreators";

describe("Action Creators", () => {
  it("should initiate the game", () => {
    const payload = true;
    const expectedAction = {
      type: ACTION_TYPES.INITIATE_GAME,
      payload
    };
    expect(actions.initiateGame(payload)).toEqual(expectedAction);
  });
});
