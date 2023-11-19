"use client";
import { useEffect, useState } from "react";
import { getMovieDetails } from "@/api/getMovieDetails";
import { useFavorites } from "@/context";
import TantoFlixPage from "@/components/TantoFlixPage";
import SkeletonTantoFlixPage from "@/components/TantoFlixPage/Skeleton";
import { Typography } from "@mui/material";

export default function FavoritesPage() {
  const apiKey = process.env.TMDB_API_KEY;
  const { favorites } = useFavorites();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Promise.all(favorites.map((e) => getMovieDetails(e.id, apiKey)))
      .then((movieDetails) => {
        setMovies(movieDetails);
      })
      .catch((error) => {
        console.error("Erro ao obter detalhes do filme:", error);
        setMovies([]);
      });
  }, [favorites, apiKey]);

  return (
    <>
      {movies.length > 0 ? (
        <TantoFlixPage movies={movies} />
      ) : (
        <div>
          {favorites.length === 0 ? (
            <Typography variant="h4">
              Você ainda não adicionou nenhum filme aos favoritos.
            </Typography>
          ) : (
            <SkeletonTantoFlixPage />
          )}
        </div>
      )}
    </>
  );
}
