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

const combine = statistics =>
  statistics.average.map((metric, index) => ({
    ...metric,
    ...statistics.normal[index],
  }));

export default {
  toFixed,
  combine,
};
