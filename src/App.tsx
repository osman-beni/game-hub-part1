import { Grid, GridItem, Stack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import "./App.css";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Stack hideBelow="lg">
          <GridItem area="aside" mr={10} mt={5}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              genre={gameQuery.genre?.name}
            />
          </GridItem>
        </Stack>
        <GridItem area="main" paddingInline={{ xlDown: "10px" }} mt={5}>
          <GameHeading gameQuery={gameQuery} />
          <Stack
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "flex-start", md: "flex-end" }}
            mt={{ base: "24px", md: 0 }}
            mb={5}
          >
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Stack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
