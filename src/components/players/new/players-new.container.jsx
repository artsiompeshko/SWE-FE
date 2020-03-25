import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import { Saveable } from 'shared-components/saveable';

import { useValidation } from './hooks/players-new.validation-hook';
import { usePlayer } from './hooks/players-new.player-state-hook';

import PlayersNew from './players-new.presentation';

const PlayersNewContainer = ({ isLoading, loadError, saveHandler, payload }) => {
  const history = useHistory();

  const [player, setPlayer, handleNameChange, handleEmailChange] = usePlayer(payload);
  const [errors, validate] = useValidation(player);

  const save = useCallback(async () => {
    if (!validate()) {
      return;
    }

    await saveHandler(player);

    history.push('/players/view');
  }, [saveHandler, player, history, validate]);

  return (
    <Saveable isLoading={isLoading} loadError={loadError} saveHandler={save}>
      <PlayersNew
        player={player}
        errors={errors}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
      />
    </Saveable>
  );
};

PlayersNewContainer.defaultProps = {
  isLoading: false,
  loadError: null,
  payload: null,
};

PlayersNewContainer.propTypes = {
  isLoading: PropTypes.bool,
  loadError: PropTypes.shape({
    message: PropTypes.string,
  }),
  saveHandler: PropTypes.func.isRequired,
  payload: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default PlayersNewContainer;
