import React from 'react';
import PropTypes from 'prop-types';

import { useLocation, Redirect, Route } from 'react-router-dom';

import { LoggedUserContext } from 'core/context/logged-user';

const PrivateRouteContainer = ({ user, render, ...rest }) => {
  const { location } = useLocation();

  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          <LoggedUserContext.Provider value={user}>{render(rest)}</LoggedUserContext.Provider>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRouteContainer.defaultProps = {
  user: null,
};

PrivateRouteContainer.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    role: PropTypes.string,
  }),
  render: PropTypes.func.isRequired,
};

export default PrivateRouteContainer;
