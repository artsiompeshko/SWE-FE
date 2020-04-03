import React from 'react';

import { userService } from 'core/user';

class AdminPermissions extends React.Component {
  render() {
    const { children } = this.props;

    return userService.isAdmin() ? children : null;
  }
}

export default AdminPermissions;
