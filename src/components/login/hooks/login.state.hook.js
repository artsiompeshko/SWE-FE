import { useState } from 'react';

export const useLoginState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value.trim());
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value.trim());
  };

  return [email, handleEmailChange, password, handlePasswordChange];
};
