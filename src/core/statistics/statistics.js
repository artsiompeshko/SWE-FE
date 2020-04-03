const toFixed = statistics =>
  statistics.map(statistic => {
    const skipKeys = ['playerName'];
    const result = {
      ...statistic,
    };
    const keys = Object.keys(result).filter(key => !skipKeys.includes(key));

    keys.forEach(key => {
      result[key] = +(+result[key]).toFixed(2);
    });

    return result;
  });

export default {
  toFixed,
};
