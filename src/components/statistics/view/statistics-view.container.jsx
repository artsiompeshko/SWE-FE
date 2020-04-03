import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { arrayUtils } from 'core/utils';

import StatisticsView from './statistics-view.presentation';

const StatisticsViewContainer = ({ statistics }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('playerName');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedStatistics = arrayUtils.stableSort(
    statistics,
    arrayUtils.getComparator(order, orderBy),
  );

  return (
    <StatisticsView
      order={order}
      orderBy={orderBy}
      onRequestSort={handleRequestSort}
      statistics={sortedStatistics}
    />
  );
};

StatisticsViewContainer.defaultProps = {
  statistics: null,
};

StatisticsViewContainer.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      playerName: PropTypes.string.isRequired,
      averageScore: PropTypes.number.isRequired,
      topScore: PropTypes.number.isRequired,
      lowScore: PropTypes.number.isRequired,
      countOfGames: PropTypes.number.isRequired,
      averagePlace: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsViewContainer;
