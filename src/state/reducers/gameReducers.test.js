import { gameReducer } from "./gameReducer";
import * as ACTION_TYPES from "../actions/actionTypes";
import * as constants from "../../constants/index";

describe("Game reducer", () => {
  it("should return the initial state", () => {
    expect(gameReducer()).toEqual({
      isGameInitiated: false,
      selectedResource: null
    });
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

  it("should set the selected resource", () => {
    const payload = constants.RESOURCE_LIST[0].name;
    expect(
      gameReducer(
        {
          selectedResource: null
        },
        {
          type: ACTION_TYPES.SET_SELECTED_RESOURCE,
          payload: payload
        }
      )
    ).toEqual({ selectedResource: constants.RESOURCE_LIST[0].name });
  });
});
