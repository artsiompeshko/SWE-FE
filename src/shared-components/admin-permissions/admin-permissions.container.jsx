import React, { useContext } from 'react';

import { userService } from 'core/user';

import { LoggedUserContext } from 'core/context/logged-user';

import AdminPermissions from './admin-permissions.presentation';

const AdminPermissionsContainer = props => {
  const user = useContext(LoggedUserContext);
  const isAdmin = userService.isAdmin(user);

  return <AdminPermissions isAdmin={isAdmin} {...props} />;
};

export default AdminPermissionsContainer;
