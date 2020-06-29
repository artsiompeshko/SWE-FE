import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Saveable } from 'shared-components/saveable';

import { useHistory } from 'react-router-dom';

import { useValidation } from './hooks/login.validation-hook';
import { useLoginState } from './hooks/login.state.hook';

import Login from './login.presentation';

const useStyles = makeStyles(theme => ({
  root: {
    width: 640,
    margin: '0 auto',
    '& button': {
      width: '100%',
    },
  },
}));

const LoginContainer = ({ loginHandler, isLoading, loadError }) => {
  const history = useHistory();
  const [email, handleEmailChange, password, handlePasswordChange] = useLoginState();
  const [errors, validate] = useValidation(email, password);

  const login = useCallback(async () => {
    if (!validate()) {
      return;
    }

    await loginHandler({ email, password });

    history.push('/players/view');
  }, [loginHandler, email, password, history, validate]);

  const classes = useStyles();

  return (
    <Saveable
      isLoading={isLoading}
      loadError={loadError}
      saveHandler={login}
      saveText="Login"
      cancelText={null}
      className={classes.root}
    >
      <Login
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        errors={errors}
      />
    </Saveable>
  );
};

LoginContainer.defaultProps = {
  isLoading: false,
  loadError: null,
};

LoginContainer.propTypes = {
  isLoading: PropTypes.bool,
  loadError: PropTypes.shape({
    message: PropTypes.string,
  }),
  loginHandler: PropTypes.func.isRequired,
};

export default LoginContainer;
