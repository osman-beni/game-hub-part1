import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data: genres, error } = useGenres();

  return (
    <List.Root variant="plain">
      {genres.map((genre) => (
        <List.Item key={genre.id} py="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius="md"
            />
            <Text>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
