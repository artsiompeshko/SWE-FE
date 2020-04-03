import React from 'react';

import { userService } from 'core/user';

import AdminPermissions from './admin-permissions.presentation';

const AdminPermissionsContainer = props => (
  <AdminPermissions isAdmin={userService.isAdmin()} {...props} />
);

export default AdminPermissionsContainer;
