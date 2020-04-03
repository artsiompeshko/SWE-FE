import { cookieService } from 'core/cookie';

const isAdmin = () => !!cookieService.get('isAdmin');

export default {
  isAdmin,
};
