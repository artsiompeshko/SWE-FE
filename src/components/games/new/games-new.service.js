import { CUR_SEASON } from 'core/constants/season';

const transformGridDataToGameResults = ({ rows, players }) => {
  const result = rows.map(row => ({
    ...row,
    season: CUR_SEASON,
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
    season: CUR_SEASON,
  }));

const isValid = ({ rows }) =>
  rows.every(row => Object.values(row).every(metric => metric || metric === 0));

const calculateTotal = ({ row }) => {
  const result = {
    ...row,
  };

  const skipKeys = ['playerId', 'place', 'total', 'id'];

  const calculatableKeys = Object.keys(row).filter(rowKey => !skipKeys.includes(rowKey));

  result.total = 0;
  calculatableKeys.forEach(calculatableKey => {
    result.total += +row[calculatableKey];
  });

  return result;
};

const calculatePlace = ({ row, rows }) => {
  const sortedRows = rows.sort((row1, row2) => {
    if (row2.total !== row1.total) {
      return +row2.total - +row1.total;
    }

    return +row2.gold - +row1.gold;
  });

  return {
    ...row,
    place: sortedRows.findIndex(rowItem => rowItem.id === row.id) + 1,
  };
};

const calculateRows = ({ rows }) => {
  let result = [...rows];

  result = result.map(row => {
    const withTotal = calculateTotal({ row });

    return withTotal;
  });

  result = result.map(row => {
    const withPlace = calculatePlace({ row, rows: [...result] });

    return withPlace;
  });

  return result;
};

const gamesNewService = {
  transformGridDataToGameResults,
  calculateRows,
  extendWithGame,
  convertForApi,
  isValid,
};

export { gamesNewService };
