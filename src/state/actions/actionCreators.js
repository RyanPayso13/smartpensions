import * as ACTION_TYPES from "./actionTypes";

export function initiateGame(data = false) {
  return {
    type: ACTION_TYPES.INITIATE_GAME,
    payload: data
  };
}
