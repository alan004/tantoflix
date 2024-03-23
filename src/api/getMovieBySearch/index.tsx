import apiConfig from "@/utils/apiConfig";
const apiKey = process.env.TMDB_API_KEY;
export async function getMovieBySearch(query: any, page: number) {
  try {
    const response = await apiConfig.get(
      `search/movie`, {
        params: {
          api_key: apiKey,
          query: query,
          page: page,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filme:", error);
    throw error;
  }
}
