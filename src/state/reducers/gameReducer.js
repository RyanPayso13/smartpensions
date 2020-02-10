import * as ACTION_TYPES from "../actions/actionTypes";

export const initialState = {
  gameCounter: 0,
  selectedResource: null,
  players: [
    { id: 1, winCount: 0, topTrump: null, attribute: "" },
    { id: 2, winCount: 0, topTrump: null, attribute: "" }
  ]
};

export const gameReducer = (state = initialState, action = "") => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_GAME_COUNT:
      return {
        ...state,
        gameCounter: state.gameCounter + 1
      };
    case ACTION_TYPES.SET_SELECTED_RESOURCE:
      return {
        ...state,
        selectedResource: action.payload
      };
    case ACTION_TYPES.INCREMENT_WIN_COUNT_BY_PLAYER_ID:
      return {
        ...state,
        players: [...state.players].map(player => {
          return player.id !== action.payload
            ? player
            : {
                ...player,
                winCount: player.winCount + 1
              };
        })
      };
    case ACTION_TYPES.SET_TOP_TRUMP_BY_PLAYER_ID:
      return {
        ...state,
        players: [...state.players].map(player => {
          return player.id !== action.payload.id
            ? player
            : {
                ...player,
                ...action.payload
              };
        })
      };
    case ACTION_TYPES.SET_WINNING_ATTRIBUTE_BY_PLAYER_ID:
      return {
        ...state,
        players: [...state.players].map(player => {
          return player.id !== action.payload.id
            ? {
                ...player,
                attribute: ""
              }
            : {
                ...player,
                attribute: action.payload.attribute
              };
        })
      };
    case ACTION_TYPES.RESET_WINNING_ATTRIBUTE:
      return {
        ...state,
        players: [...state.players].map(player => {
          return { ...player, ...action.payload };
        })
      };
    default:
      return { ...state };
  }
};
