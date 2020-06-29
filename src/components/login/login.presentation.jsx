import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem: {
    marginBottom: '16px',
  },
}));

const Login = ({ email, password, handleEmailChange, handlePasswordChange, errors }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.gridItem}>
        <TextField
          id="email"
          required
          value={email}
          label="Email"
          error={!!errors.email}
          onChange={handleEmailChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <TextField
          id="password"
          type="password"
          required
          value={password}
          label="Password"
          error={!!errors.password}
          onChange={handlePasswordChange}
          fullWidth
        />
      </Grid>
    </>
  );
};

Login.defaultProps = {
  email: '',
  password: '',
  errors: {},
};

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  errors: PropTypes.shape({
    email: PropTypes.shape({
      message: PropTypes.string,
    }),
    password: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

export default Login;
