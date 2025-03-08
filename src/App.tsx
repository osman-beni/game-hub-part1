import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";

import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
              onSelectGenre={(genre) => setSelectedGenre(genre)}
              genre={selectedGenre?.name}
            />
          </GridItem>
        </Stack>
        <GridItem area="main">
          <PlatformSelector />

          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
