let BASE_API;
if (process.env.NODE_ENV === 'production') {
  BASE_API = process.env.API || '/api';
} else {
  BASE_API = process.env.API || 'http://ec2-3-249-190-138.eu-west-1.compute.amazonaws.com:3000';
}

export const API = {
  PLAYERS: `${BASE_API}/players`,
  GENERAL_STATISTIC: `${BASE_API}/statistics/general`,
  PLAYER_STATISTIC: `${BASE_API}/statistics/player`,
  GAMES: `${BASE_API}/games`,
  GAME_RESULTS: `${BASE_API}/game-results`,
  AUTH_TOKEN: `${BASE_API}/auth/token`,
  LOGIN: `${BASE_API}/auth/login`,
};
