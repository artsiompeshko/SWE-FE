import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  activeLink: {
    background: theme.palette.action.hover,
  },
}));

const ListItemLink = ({ to, children }) => {
  const classes = useStyles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <NavLink activeClassName={classes.activeLink} ref={ref} to={to} {...linkProps} />
      )),
    [to, classes.activeLink],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {children}
      </ListItem>
    </li>
  );
};

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
