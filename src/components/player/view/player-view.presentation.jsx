import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  analytics: {
    marginTop: theme.spacing(2),
  },
  chartTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
  },
}));

const PlayerView = ({ player, statistics }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h4" noWrap>
            {player?.name}
          </Typography>
          <Grid container className={classes.analytics}>
            <Grid item xs={6}>
              <Typography variant="h6" noWrap className={classes.chartTitle}>
                Total over time
              </Typography>
              <ResponsiveContainer height={300}>
                <LineChart data={statistics.normalStatistics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" name="Total" dataKey="total" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" noWrap className={classes.chartTitle}>
                Place over time
              </Typography>
              <ResponsiveContainer height={300}>
                <LineChart height={300} data={statistics.normalStatistics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" name="Place" dataKey="place" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" noWrap className={classes.chartTitle}>
                Average Total over time
              </Typography>
              <ResponsiveContainer height={300}>
                <LineChart height={300} data={statistics.averageStatistics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    name="Average Total"
                    dataKey="averageTotal"
                    stroke="#a11a10"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" noWrap className={classes.chartTitle}>
                Average Place over time
              </Typography>
              <ResponsiveContainer height={300}>
                <LineChart height={300} data={statistics.averageStatistics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    name="Average Place"
                    dataKey="averagePlace"
                    stroke="#c98506"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

PlayerView.defaultProps = {
  player: null,
  statistics: null,
};

PlayerView.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  statistics: PropTypes.shape({
    averageStatistics: PropTypes.arrayOf(
      PropTypes.shape({
        averagePlace: PropTypes.number,
        averageTotal: PropTypes.number,
      }),
    ),
    normalStatistics: PropTypes.arrayOf(
      PropTypes.shape({
        place: PropTypes.number,
        total: PropTypes.number,
      }),
    ),
  }),
};

export default PlayerView;
