import * as ACTION_TYPES from "../actions/actionTypes";

export const initialState = {
  isGameInitiated: false
};

export const gameReducer = (state = initialState, action = "") => {
  switch (action.type) {
    case ACTION_TYPES.INITIATE_GAME:
      return {
        ...state,
        isGameInitiated: true
      };
    default:
      return { ...state };
  }
};
