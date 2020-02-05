import * as ACTION_TYPES from "./actionTypes";

export function initiateGame(data = false) {
  return {
    type: ACTION_TYPES.INITIATE_GAME,
    payload: data
  };
}

export function setSelectedResource(data = null) {
  return {
    type: ACTION_TYPES.SET_SELECTED_RESOURCE,
    payload: data
  };
}
