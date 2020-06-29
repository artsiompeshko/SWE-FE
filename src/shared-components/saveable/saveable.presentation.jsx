import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import classnames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

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

const Saveable = ({
  children,
  saveHandler,
  isLoading,
  saveText,
  cancelText,
  loadError,
  className,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const goBack = useCallback(() => history.goBack(), [history]);

  return (
    <form className={classnames(classes.root, className)} onSubmit={e => e.preventDefault()}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Grid>
        {loadError && (
          <Grid item xs={12}>
            <FormHelperText error>{loadError.message}</FormHelperText>
          </Grid>
        )}
        <Grid item xs={12}>
          <LoadingButton
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
            className={classes.submit}
            isLoading={isLoading}
            onClick={saveHandler}
            startIcon={<SaveIcon />}
          >
            {saveText}
          </LoadingButton>
          {cancelText && (
            <Button
              variant="contained"
              size="medium"
              type="button"
              startIcon={<SaveIcon />}
              onClick={goBack}
            >
              {cancelText}
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};

Saveable.defaultProps = {
  isLoading: false,
  loadError: null,
  saveText: 'Save',
  cancelText: 'Cancel',
  className: null,
};

Saveable.propTypes = {
  saveHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loadError: PropTypes.shape({
    message: PropTypes.string,
  }),
  saveText: PropTypes.string,
  cancelText: PropTypes.string,
  className: PropTypes.string,
};

export default Saveable;
