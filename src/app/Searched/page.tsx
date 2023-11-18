"use client";
import { useEffect, useState } from "react";
import TantoFlixPage from "@/components/TantoFlixPage";
import { getMovieBySearch } from "@/api/getMovieBySearch";
import { useSearchParams } from "next/navigation";
import SkeletonTantoFlixPage from "@/components/TantoFlixPage/Skeleton";

const SearchResults: React.FC = () => {
  const apiKey = process.env.TMDB_API_KEY;
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState({ results: [] });

  useEffect(() => {
    if (query) {
      getMovieBySearch(query as string, apiKey).then((result) => {
        setMovies(result);
      });
    }
  }, [query]);

  return (
    <div>
      <h1>Resultados da Pesquisa</h1>
      {movies.results.length > 0 ? (
        <TantoFlixPage movies={movies.results} />
      ) : (
        <>
          <SkeletonTantoFlixPage />
        </>
      )}
    </div>
  );
};

export default SearchResults;
