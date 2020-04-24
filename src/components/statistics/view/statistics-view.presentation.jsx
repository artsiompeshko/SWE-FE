import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { PlayerRow } from 'shared-components/player-row';
import { playersService } from 'core/players';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StatisticsView = ({ statistics, players, onRequestSort, orderBy, order }) => {
  const classes = useStyles();

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Statistics view">
        <TableHead>
          <TableRow>
            <TableCell sortDirection={orderBy === 'playerName' ? order : false}>
              <TableSortLabel
                active={orderBy === 'playerName'}
                direction={orderBy === 'playerName' ? order : 'asc'}
                onClick={createSortHandler('playerName')}
              >
                Player Name
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'averageScore' ? order : false}>
              <TableSortLabel
                active={orderBy === 'averageScore'}
                direction={orderBy === 'averageScore' ? order : 'asc'}
                onClick={createSortHandler('averageScore')}
              >
                Average Score
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'topScore' ? order : false}>
              <TableSortLabel
                active={orderBy === 'topScore'}
                direction={orderBy === 'topScore' ? order : 'asc'}
                onClick={createSortHandler('topScore')}
              >
                Top Score
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'lowScore' ? order : false}>
              <TableSortLabel
                active={orderBy === 'lowScore'}
                direction={orderBy === 'lowScore' ? order : 'asc'}
                onClick={createSortHandler('lowScore')}
              >
                Low Score
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'countOfGames' ? order : false}>
              <TableSortLabel
                active={orderBy === 'countOfGames'}
                direction={orderBy === 'countOfGames' ? order : 'asc'}
                onClick={createSortHandler('countOfGames')}
              >
                Count Of Games
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'averagePlace' ? order : false}>
              <TableSortLabel
                active={orderBy === 'averagePlace'}
                direction={orderBy === 'averagePlace' ? order : 'asc'}
                onClick={createSortHandler('averagePlace')}
              >
                Average Place
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics &&
            statistics.map(row => (
              <TableRow key={row.playerId}>
                <TableCell component="th" scope="row">
                  <NavLink to={`/player/${row.playerId}`}>
                    <PlayerRow player={playersService.getPlayer(row.playerId, players)} />
                  </NavLink>
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
  players: null,
};

StatisticsView.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      playerName: PropTypes.string.isRequired,
      averageScore: PropTypes.number.isRequired,
      topScore: PropTypes.number.isRequired,
      lowScore: PropTypes.number.isRequired,
      countOfGames: PropTypes.number.isRequired,
      averagePlace: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsView;
