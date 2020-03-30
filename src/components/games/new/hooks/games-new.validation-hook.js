import { useState } from 'react';
import { gamesNewService } from '../games-new.service';

export const useValidation = rows => {
  const [error, setError] = useState(null);

  const validate = () => {
    const isValid = gamesNewService.isValid({ rows });

    setError(isValid ? null : 'Not all fields set!');

    return isValid;
  };

  return [error, validate];
};
