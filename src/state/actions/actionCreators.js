import * as ACTION_TYPES from "./actionTypes";

export function incrementGameCount(data = 0) {
  return {
    type: ACTION_TYPES.INCREMENT_GAME_COUNT,
    payload: data
  };
}

export function setSelectedResource(data = null) {
  return {
    type: ACTION_TYPES.SET_SELECTED_RESOURCE,
    payload: data
  };
}

export function incrementWinCount(data = 0) {
  return {
    type: ACTION_TYPES.INCREMENT_WIN_COUNT_BY_PLAYER_ID,
    payload: data
  };
}

export function setTopTrump(data = null) {
  return {
    type: ACTION_TYPES.SET_TOP_TRUMP_BY_PLAYER_ID,
    payload: data
  };
}

export function setWinningAttribute(
  data = {
    id: null,
    attribute: ""
  }
) {
  return {
    type: ACTION_TYPES.SET_WINNING_ATTRIBUTE_BY_PLAYER_ID,
    payload: data
  };
}
