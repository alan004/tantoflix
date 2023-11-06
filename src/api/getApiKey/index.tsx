export default function getApiKey(apiKey: any) {
  try {
    return apiKey["apiKey"];
  } catch (error) {
    console.error("Erro ao buscar chave da api:", error);
    throw error;
  }
}
