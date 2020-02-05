import * as ACTION_TYPES from "../actions/actionTypes";

export const initialState = {
  isGameInitiated: false,
  selectedResource: null
};

export const gameReducer = (state = initialState, action = "") => {
  switch (action.type) {
    case ACTION_TYPES.INITIATE_GAME:
      return {
        ...state,
        isGameInitiated: true
      };
    case ACTION_TYPES.SET_SELECTED_RESOURCE:
      return {
        ...state,
        selectedResource: action.payload
      };
    default:
      return { ...state };
  }
};
