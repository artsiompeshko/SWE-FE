import { useState } from 'react';

export const useValidation = (email, password) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (!email) {
      setErrors({
        email: {
          message: 'invalid',
        },
      });

      return false;
    }

    if (!password) {
      setErrors({
        password: {
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
