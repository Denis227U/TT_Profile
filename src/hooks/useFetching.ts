import { useCallback } from 'react';
import { useState } from 'react';

export const useFetching = (callback: Function) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = useCallback(
    async (...args: unknown[]) => {
      try {
        setIsLoading(true);
        await callback(...args);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [callback],
  );

  return { fetching, isLoading, error };
};
