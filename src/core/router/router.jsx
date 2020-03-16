import React from 'react';

import { BrowserRouter as DomRouter, Switch, Route, Link } from 'react-router-dom';

import { routes } from './routes';

const Router = () => (
  <DomRouter>
    <div>
      <ul>
        <li>
          <Link to="/games">Games</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  </DomRouter>
);

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default Router;
