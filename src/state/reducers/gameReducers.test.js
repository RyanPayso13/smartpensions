import { gameReducer } from "./gameReducer";
import * as ACTION_TYPES from "../actions/actionTypes";

describe("Game reducer", () => {
  it("should return the initial state", () => {
    expect(gameReducer()).toEqual({ isGameInitiated: false });
  });

  it("should initiate the game", () => {
    const payload = true;
    expect(
      gameReducer(
        {
          isGameInitiated: false
        },
        {
          type: ACTION_TYPES.INITIATE_GAME,
          payload: payload
        }
      )
    ).toEqual({ isGameInitiated: true });
  });
});
