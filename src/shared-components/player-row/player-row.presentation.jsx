import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Achievements } from 'shared-components/achievements';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const PlayerRow = ({ player }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {player.name}
      <Achievements achievements={player.achievements} />
    </div>
  );
};

PlayerRow.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default PlayerRow;
