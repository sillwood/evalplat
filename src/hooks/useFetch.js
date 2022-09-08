import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const initialState = {
    data: null,
    error: null,
    isLoading: true,
  };

  const [payload, setPayload] = useState(initialState);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPayload({
          data: data,
          error: data.error,
          isLoading: false,
        });
      });
  }, [url]);

  return payload;
};
