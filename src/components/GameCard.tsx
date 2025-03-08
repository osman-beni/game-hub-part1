import { Card, HStack, Image, Heading } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
  isLoading: boolean;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius="2xl" overflow="hidden">
      <Image
        src={
          getCroppedImageUrl(game.background_image) ||
          "/images/no-image-placeholder.webp"
        }
      />
      <Card.Header fontSize="xl" fontWeight="medium">
        {game.name}
      </Card.Header>
      <Card.Body>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={
              game.parent_platforms
                ? game.parent_platforms.map((p) => p.platform)
                : []
            }
          />
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
