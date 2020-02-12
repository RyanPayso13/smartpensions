import * as ACTION_TYPES from "./actionTypes";

export function setGameCount(data = 0) {
  return {
    type: ACTION_TYPES.SET_GAME_COUNT,
    payload: data
  };
}

export function setResource(data = "") {
  return {
    type: ACTION_TYPES.SET_RESOURCE,
    payload: data
  };
}

export function setWinCount(data = 0) {
  return {
    type: ACTION_TYPES.SET_WIN_COUNT,
    payload: data
  };
}

export function setTopTrump(data = null) {
  return {
    type: ACTION_TYPES.SET_TOP_TRUMP,
    payload: data
  };
}

export function setAttribute(
  data = {
    id: null,
    attribute: ""
  }
) {
  return {
    type: ACTION_TYPES.SET_ATTRIBUTE,
    payload: data
  };
}
