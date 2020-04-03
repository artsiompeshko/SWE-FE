import React from 'react';

import axios from 'axios';

import { API } from 'core/constants/api';

import { useAsyncLoad } from 'core/hooks/async-load';
import { statisticsService } from 'core/statistics';

import { Loadable } from 'shared-components/loadable';

import StasticsViewContainer from './statistics-view.container';

const getGeneralStatistic = async () => {
  const { data: statistics } = await axios.get(API.GENERAL_STATISTIC);

  return statisticsService.toFixed(statistics);
};

const StasticsViewFetcher = () => {
  const { isLoading, loadError, payload } = useAsyncLoad(getGeneralStatistic);

  return (
    <Loadable isLoading={isLoading} loadError={loadError}>
      <StasticsViewContainer statistics={payload} />
    </Loadable>
  );
};

export default StasticsViewFetcher;
