import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  link: {
    color: theme.palette.common.white,
  },
  profile: {
    marginLeft: 'auto',
  },
}));

const Header = ({ user }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h6" noWrap>
            SWE 2020
          </Typography>
        </Link>
        <Link
          to={`/${user?.playerId ? `player/${user.playerId}` : ''}`}
          className={classnames(classes.link, classes.profile)}
        >
          <Typography variant="p" noWrap>
            {user?.email}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    playerId: PropTypes.number,
  }).isRequired,
};

export default Header;
