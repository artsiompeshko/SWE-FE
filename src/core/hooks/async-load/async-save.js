import { useCallback, useState } from 'react';

export default loader => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const [payload, setPayload] = useState(null);

  const saveHandler = useCallback(
    async (...data) => {
      try {
        setIsLoading(true);
        setLoadError(null);

        const result = await loader(...data);

        setPayload(result);
        setIsLoading(false);
      } catch (e) {
        setLoadError(e);
        setIsLoading(false);

        throw e;
      }
    },
    [loader],
  );

  return { isLoading, loadError, payload, saveHandler };
};
