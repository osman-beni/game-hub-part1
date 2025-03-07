import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres, error } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
