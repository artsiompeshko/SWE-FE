import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StatisticsView = ({ statistics }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Statistics view">
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell>Average Score</TableCell>
            <TableCell>Top Score</TableCell>
            <TableCell>Low Score</TableCell>
            <TableCell>Count Of Games</TableCell>
            <TableCell>Average Place</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics &&
            statistics.map(row => (
              <TableRow key={row.playerId}>
                <TableCell component="th" scope="row">
                  {row.playerName}
                </TableCell>
                <TableCell>{row.averageScore}</TableCell>
                <TableCell>{row.topScore}</TableCell>
                <TableCell>{row.lowScore}</TableCell>
                <TableCell>{row.countOfGames}</TableCell>
                <TableCell>{row.averagePlace}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

StatisticsView.defaultProps = {
  statistics: null,
};

StatisticsView.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      playerName: PropTypes.string.isRequired,
      averageScore: PropTypes.string.isRequired,
      topScore: PropTypes.number.isRequired,
      lowScore: PropTypes.number.isRequired,
      countOfGames: PropTypes.string.isRequired,
      averagePlace: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsView;
