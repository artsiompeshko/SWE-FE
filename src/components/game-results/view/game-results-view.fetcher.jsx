import React from 'react';

import axios from 'axios';

import { API } from 'core/constants/api';

import { useAsyncLoad } from 'core/hooks/async-load';

import { Loadable } from 'shared-components/loadable';

import { gameResultsViewService } from './game-results-view.service';

import GameResultsView from './game-results-view.presentation';

const getGameResults = async () => {
  const { data: gameResults } = await axios.get(API.GAME_RESULTS);
  const { data: players } = await axios.get(API.PLAYERS);

  return gameResultsViewService.mapPlayers({
    gameResults,
    players,
  });
};

const GameResultsViewFetcher = () => {
  const { isLoading, loadError, payload } = useAsyncLoad(getGameResults);

  return (
    <Loadable isLoading={isLoading} loadError={loadError}>
      <GameResultsView gameResults={payload} />
    </Loadable>
  );
};

export default GameResultsViewFetcher;
