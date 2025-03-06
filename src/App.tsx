import { Grid, GridItem, Stack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";

import "./App.css";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        maxW="1240px"
        mx="auto"
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Stack hideBelow="lg">
          <GridItem area="aside">Aside</GridItem>
        </Stack>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
