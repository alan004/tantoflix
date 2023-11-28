import axios from "axios";
const apiKey = process.env.TMDB_API_KEY;

export async function getMovieCredits(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=pt-BR`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar elenco do filme:", error);
    throw error;
  }
}
