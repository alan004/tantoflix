import axios, { AxiosRequestConfig } from 'axios';
import { useFavorites } from '@/context';

const apiConfig = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const getLanguageFromLocalStorage = (): string | null => {
  return localStorage.getItem('language');
};

apiConfig.interceptors.request.use((config) => {
  const language = getLanguageFromLocalStorage();
  config.params = { ...config.params, language };
  return config;
  })

export default apiConfig;
