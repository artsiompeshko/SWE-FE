import { useState } from 'react';

export const usePlayer = initialState => {
  const [player, setPlayer] = useState(
    initialState || {
      name: '',
      email: '',
    },
  );

  const handleNameChange = event => {
    setPlayer({
      ...player,
      name: event.target.value,
    });
  };
  const handleEmailChange = event => {
    setPlayer({
      ...player,
      email: event.target.value,
    });
  };

  return [player, setPlayer, handleNameChange, handleEmailChange];
};
