import apiConfig from "@/utils/apiConfig";
const apiKey = process.env.TMDB_API_KEY;
export async function getMovieByFilter(query: any, page: number) {
  try {
    const response = await apiConfig.get(
      `discover/movie`,
      { params: { api_key: apiKey, with_genres: query, page: page }}
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao filtrar filme:", error);
    throw error;
  }
}
