import React from 'react';

import { useAsyncSave } from 'core/hooks/async-load';

import loginService from './login.service';

import LoginContainer from './login.container';

const login = async ({ email, password }) => {
  await loginService.login({ email, password });
};

const GamesNewFetcher = () => {
  const { isLoading, loadError, payload, saveHandler } = useAsyncSave(login);

  return <LoginContainer loginHandler={saveHandler} isLoading={isLoading} loadError={loadError} />;
};

export default GamesNewFetcher;
