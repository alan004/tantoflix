import axios from "axios";

export async function getPopularMovies(apiKey) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    throw error;
  }
}
