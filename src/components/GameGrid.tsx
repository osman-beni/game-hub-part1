import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { range } from "../services/utils";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = range(6);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        gap={10}
        paddingInline={{ xlDown: "10px" }}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!isLoading &&
          games.map((game) => (
            <GameCard key={game.id} game={game} isLoading={isLoading} />
          ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
