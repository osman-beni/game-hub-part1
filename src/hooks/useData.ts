import { useEffect, useState } from "react";

import apiClient, { CanceledError, AxiosError } from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((result) => {
        setData(result.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
}

export default useData;
