import React from "react";

import { Game } from "../hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius="2xl" overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Header>{game.name}</Card.Header>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
