require("dotenv").config();
const apiKey = process.env.TMDB_API_KEY;
import { getPopularMovies } from "@/api/getPopularMovies";
import TantoFlixPage from "@/components/TantoFlixPage";

export default async function PopularMovies() {
  const response = await getPopularMovies(apiKey);
  const movies = response.results;
  return <TantoFlixPage movies={movies} />;
}
