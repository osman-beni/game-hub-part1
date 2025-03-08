import {
  HStack,
  Image,
  List,
  Spinner,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre(genre: Genre): void;
  genre?: string;
}

function GenreList({ onSelectGenre, genre }: Props) {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <List.Root variant="plain">
      {genres.map((g) => (
        <List.Item key={g.id} py="5px">
          <Link
            onClick={(event) => {
              event.preventDefault();
              onSelectGenre(g);
            }}
          >
            <HStack>
              <Image
                src={getCroppedImageUrl(g.image_background)}
                boxSize="32px"
                borderRadius="md"
              />
              <Text fontWeight={genre === g.name ? "bold" : "normal"}>
                {g.name}
              </Text>
            </HStack>
          </Link>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
