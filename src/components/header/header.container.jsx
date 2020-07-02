import React, { useContext } from 'react';

import { LoggedUserContext } from 'core/context/logged-user';

import Header from './header.presentation';

const HeaderContainer = () => {
  const user = useContext(LoggedUserContext);

  return <Header user={user} />;
};

export default HeaderContainer;
