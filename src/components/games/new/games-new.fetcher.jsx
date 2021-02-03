import React from 'react';

import axios from 'axios';

import { CUR_SEASON } from 'core/constants/season';
import { API } from 'core/constants/api';

import { useAsyncSave, useAsyncLoad } from 'core/hooks/async-load';

import { Loadable } from 'shared-components/loadable';

import GamesNew from './games-new.container';

import { gamesNewService } from './games-new.service';

const saveGame = async ({ gameResults }) => {
  const { data: game } = await axios.post(API.GAMES, { season: CUR_SEASON });
  const extendedGameResults = gamesNewService.convertForApi({
    gameResults: gamesNewService.extendWithGame({ gameResults, game }),
  });

  const result = await Promise.all(
    extendedGameResults.map(extendedGameResult => axios.post(API.GAME_RESULTS, extendedGameResult)),
  );

  return result;
};

const getPlayers = async () => {
  const { data: players } = await axios.get(API.PLAYERS);

  return players;
};

const GamesNewFetcher = () => {
  const { isLoading, loadError, payload, saveHandler } = useAsyncSave(saveGame);
  const {
    isLoading: isPlayersLoading,
    loadError: playersLoadError,
    payload: players,
  } = useAsyncLoad(getPlayers);

  return (
    <Loadable isLoading={isPlayersLoading} loadError={playersLoadError}>
      <GamesNew
        isLoading={isLoading}
        loadError={loadError}
        payload={payload}
        players={players}
        saveHandler={saveHandler}
      />
    </Loadable>
  );
};

export default GamesNewFetcher;
