const RevalidateHook = () => {
  return <div>RevalidateHook</div>;
};

export default RevalidateHook;

// import React from 'react';
// import useAxiosData from './useAxiosData';

// const MyComponent: React.FC = () => {
//   const { data, loading, error, revalidate } = useAxiosData('/api/data');

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Data</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//       <button onClick={revalidate}>Revalidate</button>
//     </div>
//   );
// };

// export default MyComponent;

// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const useAxiosData = (url: string) => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(url);
//       setData(response.data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [url]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return { data, loading, error, revalidate: fetchData };
// };

// export default useAxiosData;

// If you want to revalidate data in real-time using Axios without relying on SWR, you can achieve this using React's hooks like useState and useEffect, combined with a function to manually trigger data fetching. Here's a basic example:
