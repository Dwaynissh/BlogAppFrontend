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

// export const useFeeRecords = (schoolID: string) => {
//   try {
//     const { data: recordPayment } = useSWR(
//       `api/getall-fee-records/${schoolID}`,
//       async () => {
//         return await getRecords(schoolID).then(
//           (res: any) => res?.data?.recordPayments || []
//         );
//       },
//       { refreshInterval: 2000 }
//     );

//     return {
//       payments: recordPayment || []
//     };
//   } catch (error) {
//     console.error();
//     return error;
//   }
// };
