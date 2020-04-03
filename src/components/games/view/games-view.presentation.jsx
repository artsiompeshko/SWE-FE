import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';

import { AdminPermissions } from 'shared-components/admin-permissions';

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

const GamesView = ({ games }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Games View" component="div">
        <TableHead component="div">
          <TableRow component="div">
            <TableCell component="div">Number</TableCell>
            <TableCell component="div">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody component="div">
          {games &&
            games.map((game, index) => (
              <TableRow hover key={game.id} component={NavLink} to={`/games/${game.id}`}>
                <TableCell component="div" scope="row">
                  Game no. {index + 1}
                </TableCell>
                <TableCell component="div">{new Date(game.createdAt).toDateString()}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <AdminPermissions>
        <NavLink to="new">
          <Fab color="secondary" aria-label="add" className={classes.fad}>
            <AddIcon />
          </Fab>
        </NavLink>
      </AdminPermissions>
    </TableContainer>
  );
};

GamesView.defaultProps = {
  games: null,
};

GamesView.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ),
};

export default GamesView;
