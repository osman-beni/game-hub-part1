import React, { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";
import { Text } from "@chakra-ui/react";

import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((result) => setGames(result.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameGrid;
