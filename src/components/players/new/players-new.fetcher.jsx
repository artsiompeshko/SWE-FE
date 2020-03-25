import React from 'react';

import axios from 'axios';

import { API } from 'core/constants/api';

import { useAsyncSave } from 'core/hooks/async-load';

import PlayersNew from './players-new.container';

const savePlayer = async playerToSave => {
  const { data: player } = await axios.post(API.PLAYERS, {
    ...playerToSave,
    name: playerToSave.name.trim(),
    email: playerToSave.email.trim(),
  });

  return player;
};

const PlayersNewFetcher = () => {
  const { isLoading, loadError, payload, saveHandler } = useAsyncSave(savePlayer);

  return (
    <PlayersNew
      isLoading={isLoading}
      loadError={loadError}
      payload={payload}
      saveHandler={saveHandler}
    />
  );
};

export default PlayersNewFetcher;
