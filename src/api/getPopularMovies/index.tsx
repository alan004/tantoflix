import apiConfig from "@/utils/apiConfig"
const apiKey = process.env.TMDB_API_KEY
export async function getPopularMovies(page: number) {
  try {
    const response = await apiConfig.get(
      `movie/popular`, { params: {api_key: apiKey, page: page}}
    )
    return response.data
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error)
    throw error
  }
}
