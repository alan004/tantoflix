"use client";
import { useEffect, useState } from "react";
import TantoFlixPage from "@/components/TantoFlixPage";
import { getMovieBySearch } from "@/api/getMovieBySearch";
import { useSearchParams } from "next/navigation";
import SkeletonTantoFlixPage from "@/components/TantoFlixPage/Skeleton";
import { Typography } from "@mui/material";
import NotFound from "@/components/NotFound";

const SearchResults: React.FC = () => {
  const apiKey = process.env.TMDB_API_KEY;
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState({ results: [] });
  const [movieNotFoundMessage, setMovieNotFoundMessage] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (query) {
      setMovieNotFoundMessage(false);
      clearTimeout(timeoutId);
      getMovieBySearch(query as string, apiKey)
        .then((result) => {
          setMovies(result);
          timeoutId = setTimeout(() => {
            if (result.results.length === 0) {
              setMovieNotFoundMessage(true);
            }
          }, 2000);
        })
        .catch((error) => {
          console.error("Erro ao obter resultados da pesquisa:", error);
        });
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, apiKey]);

  return (
    <div>
      <Typography variant="h4">Resultados da Pesquisa</Typography>
      {movieNotFoundMessage ? (
        <NotFound texto={["Nenhum filme encontrado"]} />
      ) : movies.results.length > 0 ? (
        <TantoFlixPage movies={movies.results} />
      ) : (
        <SkeletonTantoFlixPage />
      )}
    </div>
  );
};

export default SearchResults;
