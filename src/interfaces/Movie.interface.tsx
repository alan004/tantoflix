export default interface MovieCardProps {
  movie?: {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | {};
    budget: number;
    genres: { id: number; name: string }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }[];
    production_countries: { iso_3166_1: string; name: string }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
  credits?: MovieCardCreditsProps;
}

export interface MovieCredit {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  job: string;
}

export interface MovieCardCreditsProps {
  id: number;
  cast: MovieCredit[];
  crew: MovieCredit[];
}

export interface MovieCardDetailsProps {
  movie: MovieCardProps;
  credits: MovieCardCreditsProps;
}
