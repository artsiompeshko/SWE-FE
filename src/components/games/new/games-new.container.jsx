import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import { Saveable } from 'shared-components/saveable';

import { useValidation } from './hooks/games-new.validation-hook';
import { useGrid } from './hooks/games-new.grid-state-hook';

import { gamesNewService } from './games-new.service';

import GamesNew from './games-new.presentation';

const GamesNewContainer = ({ players, isLoading, loadError, saveHandler }) => {
  const history = useHistory();

  const [rows, setRows, columns, setColumns, onRowsUpdate, onNewGrid] = useGrid({
    players,
  });
  const [error, validate] = useValidation(rows, columns);

  const save = useCallback(async () => {
    if (!validate() || !rows.length) {
      return;
    }

    const gameResults = gamesNewService.transformGridDataToGameResults({ rows, players });

    await saveHandler({ gameResults });

    history.push('/games/view');
  }, [saveHandler, rows, history, validate, players]);

  return (
    <Saveable isLoading={isLoading} loadError={loadError} saveHandler={save}>
      <GamesNew
        rows={rows}
        error={error}
        columns={columns}
        onRowsUpdate={onRowsUpdate}
        onNewGrid={onNewGrid}
      />
    </Saveable>
  );
};

GamesNewContainer.defaultProps = {
  isLoading: false,
  loadError: null,
  players: [],
};

GamesNewContainer.propTypes = {
  isLoading: PropTypes.bool,
  loadError: PropTypes.shape({
    message: PropTypes.string,
  }),
  saveHandler: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default GamesNewContainer;
