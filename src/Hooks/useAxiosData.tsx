import { useState, useCallback, useEffect } from "react";
import axios from "axios";

interface UseAxiosDataResult<data> {
  data: data | null;
  loading: boolean;
  error: string | null;
  revalidate: () => void;
}

const useAxiosData = <data,>(url: string): UseAxiosDataResult<data> => {
  const [data, setData] = useState<data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, revalidate: fetchData };
};

export default useAxiosData;
