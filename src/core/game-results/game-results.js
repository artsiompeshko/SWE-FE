const injectPlayers = ({ gameResults, players }) =>
  gameResults.map(gameResult => ({
    ...gameResult,
    player: players.find(player => player.id === gameResult.playerId),
  }));

export default {
  injectPlayers,
};
