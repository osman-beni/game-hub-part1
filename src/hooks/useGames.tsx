import { useEffect, useState } from "react";

import apiClient, { CanceledError, AxiosError } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((result) => {
        setGames(result.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}

export default useGames;
