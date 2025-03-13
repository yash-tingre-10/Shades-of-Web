import { useState, useEffect } from "react";
import axios from "axios";


const API_URL = "/api";
const AUTH_HEADER = {
  Authorization: `Basic bmVoYTowI21JdkJCdzRBdWJoKTU5QXhEQ0hIQTU=`,
};

const useFetch = () => {
  const [fetchedData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get( API_URL, {
          headers: AUTH_HEADER,
          cancelToken: source.token,
        });

        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) return; // Ignore if request is canceled
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => source.cancel("Component unmounted");
  }, []); // Runs when `useProxy` changes

  return { fetchedData, loading, error };
};

export default useFetch;
