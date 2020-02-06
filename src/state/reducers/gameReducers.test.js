import { gameReducer } from "./gameReducer";
import * as ACTION_TYPES from "../actions/actionTypes";
import * as constants from "../../constants/index";

describe("Game reducer", () => {
  it("should return the initial state", () => {
    expect(gameReducer()).toEqual({
      gameCounter: 0,
      selectedResource: null,
      players: [
        { id: 1, winCount: 0 },
        { id: 2, winCount: 0 }
      ]
    });
  });

  it("should increment the game counter", () => {
    expect(
      gameReducer(
        {
          gameCounter: 0
        },
        {
          type: ACTION_TYPES.INCREMENT_GAME_COUNT
        }
      )
    ).toEqual({ gameCounter: 1 });
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

  it("should increment the player win count by ID", () => {
    expect(
      gameReducer(
        {
          players: [
            { id: 1, winCount: 0 },
            { id: 2, winCount: 0 }
          ]
        },
        {
          type: ACTION_TYPES.INCREMENT_WIN_COUNT_BY_PLAYER_ID,
          payload: {
            id: 1
          }
        }
      )
    ).toEqual({
      players: [
        { id: 1, winCount: 1 },
        { id: 2, winCount: 0 }
      ]
    });
  });
});
