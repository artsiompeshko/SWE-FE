import axios from 'axios';

import { API } from 'core/constants/api';
import { cookieService } from 'core/cookie';

const login = async ({ email, password }) => {
  const result = await axios.post(API.LOGIN, {
    email,
    password,
  });

  cookieService.set('user_token', result.data.access_token);
  axios.defaults.headers.common.Authorization = `Bearer ${result.data.access_token}`;

  return result;
};

export default {
  login,
};
