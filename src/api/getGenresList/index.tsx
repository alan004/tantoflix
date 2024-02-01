import axios from "axios";
const apiKey = process.env.TMDB_API_KEY;
export async function getGenresList() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao filtrar filme:", error);
    throw error;
  }
}
