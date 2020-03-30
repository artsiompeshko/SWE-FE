const transformGridDataToGameResults = ({ rows, players }) => {
  const result = rows.map(row => ({
    ...row,
    playerId: players.filter(player => player.name === row.playerId)[0].id,
  }));

  for (const row of result) {
    for (const key in row) {
      if (row.hasOwnProperty(key)) {
        row[key] = +row[key];
      }
    }
  }

  return result;
};

const extendWithGame = ({ gameResults, game }) =>
  gameResults.map(gameResult => ({
    ...gameResult,
    gameId: game.id,
  }));

const convertForApi = ({ gameResults }) =>
  gameResults.map(gameResult => ({
    ...gameResult,
    playerId: +gameResult.playerId,
  }));

const isValid = ({ rows }) =>
  rows.every(row => Object.values(row).every(metric => metric || metric === 0));

const gamesNewService = {
  transformGridDataToGameResults,
  extendWithGame,
  convertForApi,
  isValid,
};

export { gamesNewService };
