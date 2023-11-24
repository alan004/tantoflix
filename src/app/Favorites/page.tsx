"use client";
import { useEffect, useState } from "react";
import { getMovieDetails } from "@/api/getMovieDetails";
import { useFavorites } from "@/context";
import TantoFlixPage from "@/components/TantoFlixPage";
import SkeletonTantoFlixPage from "@/components/TantoFlixPage/Skeleton";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import DefaultTitle from "@/components/DefaultTitle";

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
        <>
          <DefaultTitle text={["Sua lista de filmes favoritados!"]} />
          <TantoFlixPage movies={movies} />
        </>
      ) : (
        <div>
          {favorites.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <DefaultTitle
                text={[
                  "Você ainda não adicionou nenhum filme aos favoritos :(",
                ]}
              />
              <Button size="large" variant="contained" color="secondary">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  href={"/"}
                >
                  {" "}
                  Ir para página inicial
                </Link>
              </Button>
            </Box>
          ) : (
            <SkeletonTantoFlixPage />
          )}
        </div>
      )}
    </>
  );
}
