import apiConfig from "@/utils/apiConfig";
const apiKey = process.env.TMDB_API_KEY;
export async function getMovieDetails(movieId: number) {
  try {
    const response = await apiConfig.get(
      `movie/${movieId}`, { params: { api_key: apiKey } }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do filme:", error);
    throw error;
  }
}
