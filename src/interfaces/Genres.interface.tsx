export interface Genre {
  id: number;
  name: string;
}

export interface GenresResponse {
  genres?: Genre[];
}

export interface GenresListProps {
  genres?: GenresResponse;
}