import axios from "axios";

export async function getMovieBySearch(query, apiKey) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filme:", error);
    throw error;
  }
}
