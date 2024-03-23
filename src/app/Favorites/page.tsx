"use client";
import { useEffect, useState } from "react";
import { getMovieDetails } from "@/api/getMovieDetails";
import { useFavorites } from "@/context";
import TantoFlixPage from "@/components/TantoFlixPage";
import SkeletonTantoFlixPage from "@/components/TantoFlixPage/Skeleton";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import DefaultTitle from "@/components/DefaultTitle";
import FavoritesData from "@/interfaces/Favorites.interface";
import translations from '@/app/translations.json'
import { Idiomas } from "@/interfaces/Idiomas"

export default function FavoritesPage() {
  const favoritesData = useFavorites() as FavoritesData;
  const {language} = useFavorites();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  type ChavesValidas = keyof Idiomas;
  const LanguageSelected: ChavesValidas = language as ChavesValidas;
  const translation = translations.favoritesPage;

  useEffect(() => {
    const favorites = favoritesData.favorites;
    Promise.all(favorites.map((e: any) => getMovieDetails(e.id)))
      .then((movieDetails: any[]) => {
        setMovies(movieDetails.reverse() as never[]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao obter detalhes do filme:", error);
        setMovies([]);
        setLoading(false);
      });
  }, [favoritesData]);

  return (
    <>
      {movies.length > 0 && !loading ? (
        <>
          <DefaultTitle text={translation[LanguageSelected].title} />
          <TantoFlixPage movies={movies} />
        </>
      ) : (
        <div>
          {movies.length === 0 && !loading ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <DefaultTitle
                text={translation[LanguageSelected].noFavoritesMessage}
              />
              <Button size="large" variant="contained" color="secondary">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  href={"/"}
                >
                  {" "}
                  {translation[LanguageSelected].goToHomePageButton}
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
