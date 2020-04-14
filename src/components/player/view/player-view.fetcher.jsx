import React from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import { API } from 'core/constants/api';

import { useAsyncLoad } from 'core/hooks/async-load';

import { Loadable } from 'shared-components/loadable';

import { playersService } from 'core/players';
import { statisticsService } from 'core/statistics';

import PlayerView from './player-view.presentation';

const getPlayerData = async ({ playerId }) => {
  const { data: statistics } = await axios.get(API.PLAYER_STATISTIC, { params: { id: playerId } });
  const { data: players } = await axios.get(API.PLAYERS);

  return {
    statistics: {
      averageStatistics: statisticsService.toFixed(statistics.averageStatistics),
      normalStatistics: statisticsService.toFixed(statistics.normalStatistics),
    },
    player: playersService.getPlayer(playerId, players),
  };
};

const PlayerViewFetcher = () => {
  const { playerId } = useParams();
  const { isLoading, loadError, payload } = useAsyncLoad(getPlayerData, { playerId });

  return (
    <Loadable isLoading={isLoading} loadError={loadError}>
      <PlayerView statistics={payload?.statistics} player={payload?.player} />
    </Loadable>
  );
};

export default PlayerViewFetcher;
