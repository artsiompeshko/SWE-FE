import React from 'react';

import axios from 'axios';

import { API } from 'core/constants/api';
import { useAsyncLoad } from 'core/hooks/async-load';

import { Loadable } from 'shared-components/loadable';

import PrivateRouteContainer from './private-route.container';

const getUser = async () => {
  if (getUser.user) {
    return getUser.user;
  }

  const { data: user } = await axios.get(API.AUTH_TOKEN);

  getUser.user = user;

  return user;
};

const PrivateRouteFetcher = props => {
  const { isLoading, loadError, payload } = useAsyncLoad(getUser);

  if (loadError) {
    return <PrivateRouteContainer user={payload} {...props} />;
  }

  return (
    <Loadable isLoading={isLoading} loadError={loadError}>
      <PrivateRouteContainer user={payload} {...props} />
    </Loadable>
  );
};

export default PrivateRouteFetcher;
