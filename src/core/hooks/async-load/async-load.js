import { useEffect, useState } from 'react';

export default (loader, ...params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);

        const result = await loader(...params);

        setPayload(result);
        setIsLoading(false);
      } catch (e) {
        setLoadError(e);
        setIsLoading(false);
      }
    };
    load();
  }, [loader]);

  return { isLoading, loadError, payload };
};
