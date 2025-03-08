import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import "./App.css";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        gridTemplateColumns={{ lg: "250px 1fr" }}
        maxW="1240px"
        mx="auto"
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Stack hideBelow="lg">
          <GridItem area="aside" mr={10}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              genre={gameQuery.genre?.name}
            />
          </GridItem>
        </Stack>
        <GridItem area="main" paddingInline={{ xlDown: "10px" }}>
          <Box mb={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
