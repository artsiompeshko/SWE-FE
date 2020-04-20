import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

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

const PlayerView = ({ player, statistics, metrics, toggleMetric }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h4" noWrap>
            {player?.name}
          </Typography>
          <Grid container className={classes.analytics} spacing={3}>
            <Grid item xs={9}>
              <ResponsiveContainer height={300}>
                <LineChart data={statistics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {metrics
                    .filter(metric => metric.checked)
                    .map(metric => (
                      <Line
                        key={metric.key}
                        type="monotone"
                        name={metric.title}
                        dataKey={metric.key}
                        stroke={metric.color}
                      />
                    ))}
                </LineChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={3}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Available Metrics</FormLabel>
                <FormGroup>
                  {metrics.map(metric => (
                    <FormControlLabel
                      key={metric.key}
                      control={
                        <Checkbox
                          checked={metric.checked}
                          onChange={() => toggleMetric(metric)}
                          name={metric.key}
                        />
                      }
                      label={metric.title}
                    />
                  ))}
                </FormGroup>
              </FormControl>
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
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      averagePlace: PropTypes.number,
      averageTotal: PropTypes.number,
      place: PropTypes.number,
      total: PropTypes.number,
    }),
  ),
  toggleMetric: PropTypes.func.isRequired,
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default PlayerView;
