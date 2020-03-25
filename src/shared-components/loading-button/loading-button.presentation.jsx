import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingButton = ({ isLoading, startIcon, ...props }) => (
  <Button
    {...props}
    startIcon={isLoading ? <CircularProgress size="18px" color="secondary" /> : startIcon}
  />
);

LoadingButton.defaultProps = {
  isLoading: false,
  startIcon: null,
};

LoadingButton.propTypes = {
  isLoading: PropTypes.bool,
  startIcon: PropTypes.node,
};

export default LoadingButton;
