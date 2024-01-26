import { getPopularMovies } from "@/api/getPopularMovies";
import DefaultTitle from "@/components/DefaultTitle";
import TantoFlixPage from "@/components/TantoFlixPage";

export default async function PopularMovies() {
  const response = await getPopularMovies();
  const movies = response.results;
  return (
    <>
      <DefaultTitle
        text={["Favorite e sorteie entre os filmes de sua lista!"]}
      />
      <TantoFlixPage movies={movies} />;
    </>
  );
}
