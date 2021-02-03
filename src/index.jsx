/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { cookieService } from 'core/cookie';
import { Router } from 'core/router';
import { SeasonContext } from 'core/context/season';

import * as serviceWorker from './serviceWorker';

const App = () => {
  const [season, setSeason] = useState(`${new Date().getFullYear()}`);

  axios.defaults.headers.common.Authorization = `Bearer ${cookieService.get('user_token')}`;
  axios.defaults.params = {};

  useEffect(() => {
    const seasonInterceptor = axios.interceptors.request.use(
      function(config) {
        if (config.method !== 'get') {
          return config;
        }

        if (!config.params) {
          config.params = {};
        }

        config.params.season = season;

        return config;
      },
      function(error) {
        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.request.eject(seasonInterceptor);
    };
  }, [season]);

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      <Router />
    </SeasonContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
