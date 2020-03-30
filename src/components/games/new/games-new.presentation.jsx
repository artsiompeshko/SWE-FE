import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import ReactDataGrid from 'react-data-grid';

import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem: {
    marginBottom: '16px',
  },
}));

const GamesNew = ({ columns, rows, onRowsUpdate, onNewGrid, error }) => {
  const classes = useStyles();

  return (
    <div>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => rows[i]}
        rowsCount={rows.length}
        enableCellSelect
        onGridRowsUpdated={onRowsUpdate}
      />
      <Button onClick={onNewGrid}>Add Row</Button>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};

GamesNew.defaultProps = {
  columns: [],
  rows: [],
  error: null,
};

GamesNew.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({})),
  rows: PropTypes.arrayOf(PropTypes.shape({})),
  onRowsUpdate: PropTypes.func.isRequired,
  onNewGrid: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default GamesNew;
