import React from 'react';

import axios from 'axios';

import { API } from 'core/constants/api';

import { useAsyncLoad } from 'core/hooks/async-load';

import { Loadable } from 'shared-components/loadable';

import PlayersView from './players-view.presentation';

const getPlayers = async () => {
  const players = await axios.get(API.PLAYERS);

  return players;
};

const PlayersViewFetcher = () => {
  const { isLoading, loadError, payload } = useAsyncLoad(getPlayers);

  return (
    <Loadable isLoading={isLoading} loadError={loadError}>
      <PlayersView players={payload} />
    </Loadable>
  );
};

export default PlayersViewFetcher;
