import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <img src="/swe-pack.png" alt="Swe board game pack picutre" />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
