import apiConfig from "@/utils/apiConfig";
const apiKey = process.env.TMDB_API_KEY;

export async function getGenresList() {
  try {
    const response = await apiConfig.get(
      `genre/movie/list`, {
        params: {
          api_key: apiKey
        }
      });
    return response.data;
  } catch (error) {
    console.error("Erro ao filtrar filme:", error);
    throw error;
  }
}
