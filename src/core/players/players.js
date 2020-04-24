const getPlayer = (playerId, players) => players?.find(player => +player.id === +playerId);

export default {
  getPlayer,
};
