import React from 'react';

import axios from 'axios';

import { API } from 'core/constants/api';

import { useAsyncLoad } from 'core/hooks/async-load';

import { Loadable } from 'shared-components/loadable';

import GamesView from './games-view.presentation';

const getGames = async () => {
  const { data: games } = await axios.get(API.GAMES);

  return games;
};

const GamesViewFetcher = () => {
  const { isLoading, loadError, payload } = useAsyncLoad(getGames);

  return (
    <Loadable isLoading={isLoading} loadError={loadError}>
      <GamesView games={payload} />
    </Loadable>
  );
};

export default GamesViewFetcher;
