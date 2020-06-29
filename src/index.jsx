import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { cookieService } from 'core/cookie';
import { Router } from 'core/router';

import * as serviceWorker from './serviceWorker';

const App = () => {
  axios.defaults.headers.common.Authorization = `Bearer ${cookieService.get('user_token')}`;

  return <Router />;
};

ReactDOM.render(<App />, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
