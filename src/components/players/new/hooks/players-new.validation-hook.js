import { useState } from 'react';

export const useValidation = player => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (!player.name) {
      setErrors({
        name: {
          message: 'invalid',
        },
      });

      return false;
    }

    if (!player.email) {
      setErrors({
        email: {
          message: 'invalid',
        },
      });

      return false;
    }

    setErrors({});

    return true;
  };

  return [errors, validate];
};
