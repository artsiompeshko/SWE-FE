const BASE_API = process.env.API || 'https://ec2-52-31-254-28.eu-west-1.compute.amazonaws.com:3000';

export const API = {
  PLAYERS: `${BASE_API}/players`,
  GENERAL_STATISTIC: `${BASE_API}/statistics/general`,
};
