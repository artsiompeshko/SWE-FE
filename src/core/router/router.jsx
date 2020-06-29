import React from 'react';

import { BrowserRouter as DomRouter, Switch, Route, Link } from 'react-router-dom';

import { AdminPermissions } from 'shared-components/admin-permissions';
import { Navigation } from 'components/navigation';

import { PERMISSIONS } from 'core/constants/permissions';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
  link: {
    color: theme.palette.common.white,
  },
}));

const Router = () => {
  const classes = useStyles();

  return (
    <DomRouter>
      <section className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Link to="/" className={classes.link}>
              <Typography variant="h6" noWrap>
                SWE 2020
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
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
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  };

  if (route.permissions && route.permissions === PERMISSIONS.ADMIN) {
    return <AdminPermissions showForbidden>{renderRoute()}</AdminPermissions>;
  }

  return renderRoute();
}

export default Router;
