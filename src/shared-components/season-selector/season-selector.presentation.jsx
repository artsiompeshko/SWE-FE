import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    width: '100%',
  },
  select: {
    width: '100%',
    height: '2rem',
  },
});

const SeasonSelector = ({ season, options, handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <select className={classes.select} value={season} onChange={handleChange}>
        {options.length &&
          options.length > 0 &&
          options.map(option => (
            <option key={option.key} value={option.key}>
              {option.title}
            </option>
          ))}
      </select>
    </div>
  );
};

SeasonSelector.propTypes = {
  season: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SeasonSelector;
