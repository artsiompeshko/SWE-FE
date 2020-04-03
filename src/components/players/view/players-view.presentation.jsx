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

const PlayersView = ({ players }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Players View">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players &&
            players.map(player => (
              <TableRow key={player.id}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.email}</TableCell>
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

PlayersView.defaultProps = {
  players: null,
};

PlayersView.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default PlayersView;
