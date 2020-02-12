import { gameReducer } from "./gameReducer";
import * as ACTION_TYPES from "../actions/actionTypes";
import * as constants from "../../constants/index";

describe("Game reducer", () => {
  it("should return the initial state", () => {
    expect(gameReducer()).toEqual({
      game: {
        count: 0,
        resource: null
      },
      players: [
        { id: 1, winCount: 0, topTrump: null, attribute: "" },
        { id: 2, winCount: 0, topTrump: null, attribute: "" }
      ]
    });
  });

  it("should set the game counter", () => {
    expect(
      gameReducer(
        {
          game: {
            count: 0
          }
        },
        {
          type: ACTION_TYPES.SET_GAME_COUNT
        }
      )
    ).toEqual({ game: { count: 1 } });
  });

  it("should set the selected resource", () => {
    const payload = constants.RESOURCE_LIST[0].name;
    expect(
      gameReducer(
        {
          game: {
            resource: null
          }
        },
        {
          type: ACTION_TYPES.SET_RESOURCE,
          payload: payload
        }
      )
    ).toEqual({ game: { resource: constants.RESOURCE_LIST[0].name } });
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
          type: ACTION_TYPES.SET_WIN_COUNT,
          payload: 1
        }
      )
    ).toEqual({
      players: [
        { id: 1, winCount: 1 },
        { id: 2, winCount: 0 }
      ]
    });
  });

  it("should set the top trump by player ID", () => {
    expect(
      gameReducer(
        {
          players: [
            { id: 1, winCount: 0, topTrump: null },
            { id: 2, winCount: 0, topTrump: null }
          ]
        },
        {
          type: ACTION_TYPES.SET_TOP_TRUMP,
          payload: {
            id: 1,
            topTrump: { name: "Yoda", height: 90 }
          }
        }
      )
    ).toEqual({
      players: [
        { id: 1, winCount: 0, topTrump: { name: "Yoda", height: 90 } },
        { id: 2, winCount: 0, topTrump: null }
      ]
    });
  });

  it("should set the winning attribute", () => {
    expect(
      gameReducer(
        {
          players: [
            { id: 1, attribute: "" },
            { id: 2, attribute: "" }
          ]
        },
        {
          type: ACTION_TYPES.SET_ATTRIBUTE,
          payload: {
            id: 1,
            attribute: "mass"
          }
        }
      )
    ).toEqual({
      players: [
        { id: 1, attribute: "mass" },
        { id: 2, attribute: "" }
      ]
    });
  });

  it("should reset the attributes", () => {
    expect(
      gameReducer(
        {
          players: [
            { id: 1, attribute: "mass" },
            { id: 2, attribute: "" }
          ]
        },
        {
          type: ACTION_TYPES.SET_ATTRIBUTE,
          payload: {
            id: null,
            attribute: ""
          }
        }
      )
    ).toEqual({
      players: [
        { id: 1, attribute: "" },
        { id: 2, attribute: "" }
      ]
    });
  });
});
