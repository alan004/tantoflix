import axios from "axios";
const apiKey = process.env.TMDB_API_KEY;
export async function getMovieBySearch(query: any) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filme:", error);
    throw error;
  }
}
