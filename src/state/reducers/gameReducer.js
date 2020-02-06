import * as ACTION_TYPES from "../actions/actionTypes";

export const initialState = {
  gameCounter: 0,
  selectedResource: null,
  players: [
    { id: 1, winCount: 0 },
    { id: 2, winCount: 0 }
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
      const updated = state.players.map(player => {
        if (player.id === action.payload.id) {
          return {
            ...player,
            winCount: player.winCount + 1
          };
        }
        return player;
      });
      return {
        ...state,
        players: updated
      };
    default:
      return { ...state };
  }
};
