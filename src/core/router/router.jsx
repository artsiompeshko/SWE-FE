import React from 'react';

import { BrowserRouter as DomRouter, Switch, Route, Link } from 'react-router-dom';

import { AdminPermissions } from 'shared-components/admin-permissions';
import { Navigation } from 'components/navigation';
import { Header } from 'components/header';

import { PERMISSIONS } from 'core/constants/permissions';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { PrivateRoute } from './private-route';

import { routes } from './routes';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: theme.mixins.toolbar,
}));

const Router = () => {
  const classes = useStyles();

  return (
    <DomRouter>
      <section className={classes.root}>
        <CssBaseline />
        <Navigation />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={route.path} {...route} />
            ))}
          </Switch>
        </main>
      </section>
    </DomRouter>
  );
};

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  const renderRoute = () => {
    const RenderRoute = route.public ? Route : PrivateRoute;

    return (
      <RenderRoute
        path={route.path}
        exact={!!route.exact}
        render={props => {
          let Wrapper = React.Fragment;
          const wrapperProps = {};

          if (route.permissions && route.permissions === PERMISSIONS.ADMIN) {
            Wrapper = AdminPermissions;
            wrapperProps.showForbidden = true;
          }

          return (
            <>
              <Header />
              <Wrapper {...wrapperProps}>
                <route.component {...props} routes={route.routes} />
              </Wrapper>
            </>
          );
        }}
      />
    );
  };

  return renderRoute();
}

export default Router;
