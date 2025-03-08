import {
  HStack,
  Image,
  List,
  Text,
  Link,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre(genre: Genre): void;
  genre?: string;
}

function GenreList({ onSelectGenre, genre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <>
      <Heading mb={3}>Genres</Heading>
      <List.Root variant="plain">
        {data.results.map((g) => (
          <List.Item key={g.id} py="5px">
            <Link
              onClick={(event) => {
                event.preventDefault();
                onSelectGenre(g);
              }}
            >
              <HStack>
                <Image
                  src={getCroppedImageUrl(g.image_background) || ""}
                  boxSize="32px"
                  borderRadius="md"
                  objectFit="cover"
                />
                <Text fontWeight={genre === g.name ? "bold" : "normal"}>
                  {g.name}
                </Text>
              </HStack>
            </Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GenreList;
