import * as ACTION_TYPES from "../actions/actionTypes";

export const initialState = {
  gameCounter: 0,
  selectedResource: null,
  players: [
    { id: 1, winCount: 0, topTrump: null, attribute: "" },
    { id: 2, winCount: 0, topTrump: null, attribute: "" }
  ]
};

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    if (item.id !== itemId) {
      return item;
    }
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });
  return updatedItems;
}

function incrementGameCount(state) {
  return updateObject(state, { gameCounter: state.gameCounter + 1 });
}

function setSelectedResource(state, action) {
  return updateObject(state, { selectedResource: action.payload });
}

function incrementWinCount(state, action) {
  const newPlayers = updateItemInArray(
    state.players,
    action.payload,
    player => {
      return updateObject(player, { winCount: player.winCount + 1 });
    }
  );
  return updateObject(state, { players: newPlayers });
}

function setTopTrump(state, action) {
  const newPlayers = updateItemInArray(
    state.players,
    action.payload.id,
    player => {
      return updateObject(player, { topTrump: action.payload.topTrump });
    }
  );
  return updateObject(state, { players: newPlayers });
}

function setWinningAttribute(state, action) {
  const newPlayers = state.players.map(player => {
    return updateObject(player, {
      attribute: player.id !== action.payload.id ? "" : action.payload.attribute
    });
  });

  return updateObject(state, { players: newPlayers });
}

function resetAttributes(state, action) {
  const newPlayers = state.players.map(player => {
    return updateObject(player, {
      attribute: ""
    });
  });

  return updateObject(state, { players: newPlayers });
}

export const gameReducer = (state = initialState, action = "") => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_GAME_COUNT:
      return incrementGameCount(state);
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
