const mapPlayers = ({ gameResults, players }) =>
  gameResults.map(gameResult => ({
    ...gameResult,
    playerId: players.filter(({ id }) => id === gameResult.playerId)[0].name,
  }));

const gameResultsViewService = {
  mapPlayers,
};

export { gameResultsViewService };
