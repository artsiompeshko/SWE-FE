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
import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';

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
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gameResults &&
            gameResults.map(gameResult => (
              <TableRow key={gameResult.id}>
                <TableCell component="th" scope="row">
                  {gameResult.name}
                </TableCell>
                <TableCell>{gameResult.email}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <NavLink to="new">
        <Fab color="secondary" aria-label="add" className={classes.fad}>
          <AddIcon />
        </Fab>
      </NavLink>
    </TableContainer>
  );
};

GameResultsView.defaultProps = {
  gameResults: null,
};

GameResultsView.propTypes = {
  gameResults: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default GameResultsView;
