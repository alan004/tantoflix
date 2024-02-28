import { getMovieByFilter } from "@/api/getMovieByFilter";

export function ratingConverter(rating: number) {
  return  Math.round((rating / 2) * Math.pow(10, 1)) / Math.pow(10, 1);
}

export function filterGenres(id: number, page: number) {
  const response = getMovieByFilter(id, page);
  return response;
}
