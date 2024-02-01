import axios from "axios";
const apiKey = process.env.TMDB_API_KEY;
export async function getMovieByFilter(query: any) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${query}&language=pt-BR`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao filtrar filme:", error);
    throw error;
  }
}
