import { useEffect, useState } from "react";

interface FetchResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

function useFetch<T = any>(url: string, options?: RequestInit): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const newOptions = { ...options };
      try {
        const res = await fetch(url, newOptions);
        if (res.status === 400 || res.status === 500 || res.status === 404) {
          setError(new Error(res.statusText));
          return;
        }
        const json = await res.json();
        console.log(json);
        setData(json);
      } catch (err) {
        setError(err as Error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url, options]);

  return { data, error, loading };
}

export default useFetch;
