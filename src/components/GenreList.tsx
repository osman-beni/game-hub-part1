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
}

function GenreList({ onSelectGenre }: Props) {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <List.Root variant="plain">
      {genres.map((genre) => (
        <List.Item key={genre.id} py="5px">
          <Link
            onClick={(event) => {
              event.preventDefault();
              onSelectGenre(genre);
            }}
          >
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius="md"
              />
              <Text>{genre.name}</Text>
            </HStack>
          </Link>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
