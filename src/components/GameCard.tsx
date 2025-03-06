import { Card, Image } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius="2xl" overflow="hidden">
      <Image src={game.background_image} />
      <Card.Header>{game.name}</Card.Header>
      <Card.Body>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
