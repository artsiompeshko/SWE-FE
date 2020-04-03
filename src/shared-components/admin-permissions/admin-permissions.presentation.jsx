import React from 'react';
import PropTypes from 'prop-types';

import LockIcon from '@material-ui/icons/Lock';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const AdminPermissions = ({ isAdmin, showForbidden, children }) => {
  const classes = useStyles();

  if (isAdmin) {
    return children;
  }

  if (showForbidden) {
    return (
      <Paper className={classes.paper}>
        <LockIcon fontSize="large" />
        <Typography variant="h5" gutterBottom>
          You are not allowed to see this page!
        </Typography>
      </Paper>
    );
  }

  return null;
};

AdminPermissions.defaultProps = {
  showForbidden: false,
};

AdminPermissions.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  showForbidden: PropTypes.bool,
};

export default AdminPermissions;
