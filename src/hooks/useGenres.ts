import genre from "../data/genre";

export interface Genre {
  id: number;
  image_background: string;
  name: string;
}

const useGenres = () => ({ data: genre, isLoading: false, error: null });

export default useGenres;
