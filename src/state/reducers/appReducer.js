export const gameReducer = (state = initialState, action) => {
  return {
    game: gameReducer(state.game, action),
    players: playersReducer(state.players, action)
  };
};
