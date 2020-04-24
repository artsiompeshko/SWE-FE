import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';

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
  fad: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
  },
});

const GameResultsView = ({ gameResults }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Game Results View">
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell>Brown</TableCell>
            <TableCell>Gold</TableCell>
            <TableCell>Levels</TableCell>
            <TableCell>Blue</TableCell>
            <TableCell>Yellow</TableCell>
            <TableCell>Purple</TableCell>
            <TableCell>Green</TableCell>
            <TableCell>Heros</TableCell>
            <TableCell>Place</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gameResults &&
            gameResults.map(gameResult => (
              <TableRow key={gameResult.id}>
                <TableCell>
                  <NavLink to={`/player/${gameResult.player.id}`}>{gameResult.player.name}</NavLink>
                </TableCell>
                <TableCell>{gameResult.brown}</TableCell>
                <TableCell>{gameResult.gold}</TableCell>
                <TableCell>{gameResult.levels}</TableCell>
                <TableCell>{gameResult.blue}</TableCell>
                <TableCell>{gameResult.yellow}</TableCell>
                <TableCell>{gameResult.purple}</TableCell>
                <TableCell>{gameResult.green}</TableCell>
                <TableCell>{gameResult.heros}</TableCell>
                <TableCell>{gameResult.place}</TableCell>
                <TableCell>{gameResult.total}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

GameResultsView.defaultProps = {
  gameResults: [],
};

GameResultsView.propTypes = {
  gameResults: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      brown: PropTypes.number.isRequired,
      gold: PropTypes.number.isRequired,
      levels: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      yellow: PropTypes.number.isRequired,
      purple: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      heros: PropTypes.number.isRequired,
      place: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    }),
  ),
};

export default GameResultsView;
