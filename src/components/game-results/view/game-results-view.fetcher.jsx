import React from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import { API } from 'core/constants/api';

import { useAsyncLoad } from 'core/hooks/async-load';

import { Loadable } from 'shared-components/loadable';

import { gameResultsService } from 'core/game-results';

import GameResultsView from './game-results-view.presentation';

const getGameResults = async ({ gameId }) => {
  const { data: gameResults } = await axios.get(API.GAME_RESULTS, { params: { gameId } });
  const { data: players } = await axios.get(API.PLAYERS);

  return gameResultsService.injectPlayers({
    gameResults,
    players,
  });
};

const GameResultsViewFetcher = () => {
  const { gameId } = useParams();
  const { isLoading, loadError, payload } = useAsyncLoad(getGameResults, { gameId });

  return (
    <Loadable isLoading={isLoading} loadError={loadError}>
      <GameResultsView gameResults={payload} />
    </Loadable>
  );
};

export default GameResultsViewFetcher;
