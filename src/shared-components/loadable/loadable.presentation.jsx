import React from 'react';

const Loadable = ({ isLoading, loadError, children }) => {
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (loadError) {
    return <span>{loadError.message}</span>;
  }

  return children;
};

export default Loadable;
