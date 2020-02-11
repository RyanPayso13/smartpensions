import * as ACTION_TYPES from "../actions/actionTypes";
import * as utils from "../../libs/utils";

export const initialState = {
  game: {
    count: 0
  },
  selectedResource: null,
  players: [
    { id: 1, winCount: 0, topTrump: null, attribute: "" },
    { id: 2, winCount: 0, topTrump: null, attribute: "" }
  ]
};

function setGameCount(state) {
  return utils.updateObject(state, {
    game: {
      count: state.game.count + 1
    }
  });
}

function setSelectedResource(state, action) {
  return utils.updateObject(state, { selectedResource: action.payload });
}

function incrementWinCount(state, action) {
  const newPlayers = utils.updateItemInArray(
    state.players,
    action.payload,
    player => {
      return utils.updateObject(player, { winCount: player.winCount + 1 });
    }
  );
  return utils.updateObject(state, { players: newPlayers });
}

function setTopTrump(state, action) {
  const newPlayers = utils.updateItemInArray(
    state.players,
    action.payload.id,
    player => {
      return utils.updateObject(player, { topTrump: action.payload.topTrump });
    }
  );
  return utils.updateObject(state, { players: newPlayers });
}

function setWinningAttribute(state, action) {
  const newPlayers = state.players.map(player => {
    return utils.updateObject(player, {
      attribute: player.id !== action.payload.id ? "" : action.payload.attribute
    });
  });

  return utils.updateObject(state, { players: newPlayers });
}

function resetAttributes(state) {
  const newPlayers = state.players.map(player => {
    return utils.updateObject(player, {
      attribute: ""
    });
  });

  return utils.updateObject(state, { players: newPlayers });
}

export const gameReducer = (state = initialState, action = "") => {
  switch (action.type) {
    case ACTION_TYPES.SET_GAME_COUNT:
      return setGameCount(state);
    case ACTION_TYPES.SET_SELECTED_RESOURCE:
      return setSelectedResource(state, action);
    case ACTION_TYPES.INCREMENT_WIN_COUNT_BY_PLAYER_ID:
      return incrementWinCount(state, action);
    case ACTION_TYPES.SET_TOP_TRUMP_BY_PLAYER_ID:
      return setTopTrump(state, action);
    case ACTION_TYPES.SET_WINNING_ATTRIBUTE_BY_PLAYER_ID:
      return setWinningAttribute(state, action);
    case ACTION_TYPES.RESET_WINNING_ATTRIBUTE:
      return resetAttributes(state, action);
    default:
      return { ...state };
  }
};
