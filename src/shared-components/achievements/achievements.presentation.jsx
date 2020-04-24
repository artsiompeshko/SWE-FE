import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Achievement } from './achievement';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Achievements = ({ achievements, size }) => {
  const classes = useStyles();

  return (
    achievements &&
    achievements.length > 0 && (
      <div className={classes.root}>
        {achievements.map(achievement => (
          <Achievement key={achievement} achievementKey={achievement} size={size} />
        ))}
      </div>
    )
  );
};

Achievements.defaultProps = {
  achievements: null,
  size: 'default',
};

Achievements.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.string,
};

export default Achievements;
