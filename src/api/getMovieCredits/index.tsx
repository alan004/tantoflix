import apiConfig from "@/utils/apiConfig";
const apiKey = process.env.TMDB_API_KEY;

export async function getMovieCredits(movieId: number) {
  try {
    const response = await apiConfig.get(
      `movie/${movieId}/credits`, { params: { api_key: apiKey}}
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar elenco do filme:", error);
    throw error;
  }
}
