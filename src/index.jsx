import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'core/router';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
