import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';

import { LoadingButton } from 'shared-components/loading-button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  submit: {
    marginRight: '16px',
  },
}));

const Saveable = ({ children, saveHandler, isLoading, loadError }) => {
  const classes = useStyles();
  const history = useHistory();

  const goBack = useCallback(() => history.goBack(), [history]);

  return (
    <form className={classes.root} onSubmit={e => e.preventDefault()}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            variant="contained"
            color="primary"
            size="mediom"
            type="submit"
            className={classes.submit}
            isLoading={isLoading}
            onClick={saveHandler}
            startIcon={<SaveIcon />}
          >
            Save
          </LoadingButton>
          <Button
            variant="contained"
            size="mediom"
            type="button"
            startIcon={<SaveIcon />}
            onClick={goBack}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

Saveable.defaultProps = {
  isLoading: false,
  loadError: null,
};

Saveable.propTypes = {
  saveHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loadError: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default Saveable;
