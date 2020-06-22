import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  image: props => ({
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }),
  default: {
    width: 24,
    height: 24,
  },
  large: {
    width: 35,
    height: 35,
  },
});

const ImageAchievement = ({ title, size, ...props }) => {
  const classes = useStyles(props);

  return <div title={title} className={`${classes.image} ${classes[size]}`} />;
};

ImageAchievement.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default ImageAchievement;
