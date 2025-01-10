import { useState, useCallback, useLayoutEffect } from "react";
import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTlmNTU2NDEwNzhiNTMzZWY2NjA3MzA2NGM4NTY2NiIsInN1YiI6IjY0ZmVhNTk4ZWZlYTdhMDExYWI3MjkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SSRRc-KAfVN7fHy_1JHaN_7apwPqKhdZNypW4w76TN0"; // Replace with your actual API key
const BASE_URL = "https://api.themoviedb.org/3";

const useFetch = (endpoint, params = {}, isArray = true) => {
  const [data, setData] = useState(isArray ? [] : {}); // Initialize based on expected data type
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.request(`${BASE_URL}/${endpoint}`, {
        params: { ...params },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });
        setData(isArray ? response.data.results : response.data); // Handle array or object response
        setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.response?.data || "Network error");
      setData(isArray ? [] : {}); // Reset data to initial value on error
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [endpoint, params]);

  useLayoutEffect(() => {
    setLoading(true)
    fetchData()
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLoading(true)
    fetchData()
  }, []);

  return { data, loading, error, refreshing, onRefresh };
};

export default useFetch;
