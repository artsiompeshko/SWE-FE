import React from 'react';

import axios from 'axios';

import { API } from 'core/constants/api';

import { useAsyncLoad } from 'core/hooks/async-load';

import { Loadable } from 'shared-components/loadable';

import StasticsView from './statistics-view.presentation';

const getGeneralStatistic = async () => {
  const { data: statistics } = await axios.get(API.GENERAL_STATISTIC);

  return statistics;
};

const StasticsViewFetcher = () => {
  const { isLoading, loadError, payload } = useAsyncLoad(getGeneralStatistic);

  return (
    <Loadable isLoading={isLoading} loadError={loadError}>
      <StasticsView statistics={payload} />
    </Loadable>
  );
};

export default StasticsViewFetcher;
