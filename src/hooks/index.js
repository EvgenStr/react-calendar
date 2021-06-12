import { useState, useEffect } from 'react';

export function useData(loadData) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsFetching(true);

    loadData()
      .then(data => {
        setData(data);
      })
      .catch(err => setError(err))
      .finally(() => setIsFetching(false));
  }, []);
  console.log(data, 'data');
  return { data, error, isFetching };
}