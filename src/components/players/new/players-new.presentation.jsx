import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem: {
    marginBottom: '16px',
  },
}));

const PlayersNew = ({ player, errors, handleEmailChange, handleNameChange }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.gridItem}>
        <TextField
          id="player-name"
          required
          value={player.name}
          label="Name"
          error={!!errors.name}
          onChange={handleNameChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <TextField
          id="player-email"
          required
          value={player.email}
          label="Email"
          error={!!errors.email}
          onChange={handleEmailChange}
          fullWidth
        />
      </Grid>
    </>
  );
};

PlayersNew.defaultProps = {
  player: {},
  errors: {},
};

PlayersNew.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  errors: PropTypes.shape({
    name: PropTypes.shape({
      message: PropTypes.string,
    }),
    email: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  handleEmailChange: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
};

export default PlayersNew;
