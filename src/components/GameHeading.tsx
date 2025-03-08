import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  return (
    <Heading size="3xl" mb={5}>
      {gameQuery.genre && gameQuery.platform
        ? `${gameQuery.platform.name} ${gameQuery.genre.name} Games`
        : gameQuery.genre
        ? `${gameQuery.genre.name} Games`
        : gameQuery.platform
        ? `${gameQuery.platform.name} Games`
        : "Yoo Russell"}
    </Heading>
  );
}

export default GameHeading;
