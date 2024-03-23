"use client";
import { getMovieDetails } from "@/api/getMovieDetails";
import { useFavorites } from "@/context";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import MovieCardRandom from "@/components/MovieCard/MovieCardRandom";
import Link from "next/link";
import DefaultTitle from "@/components/DefaultTitle";
import { getMovieCredits } from "@/api/getMovieCredits";
import SkeletonTantoFlixPage from "@/components/TantoFlixPage/Skeleton";
import FavoritesData from "@/interfaces/Favorites.interface";
import SorteadoProps from "@/interfaces/Sorteado.interface";
import { MovieCardCreditsProps } from "@/interfaces/Movie.interface";
import { Idiomas } from "@/interfaces/Idiomas"
import translations from '@/app/translations.json'

export default function Sorteio() {
  const favoritesData = useFavorites() as FavoritesData;
  const [movies, setMovies] = useState([]);
  const [sorteado, setSorteado] = useState<SorteadoProps | null>(null);
  const [credits, setCredits] = useState<MovieCardCreditsProps | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const { language } = useFavorites();
  type ChavesValidas = keyof Idiomas;
  const LanguageSelected: ChavesValidas = language as ChavesValidas;
  const translation = translations.drawPage;

  useEffect(() => {
    const favorites = favoritesData.favorites;
    Promise.all(favorites.map((e: any) => getMovieDetails(e.id)))
      .then((movieDetails: any) => {
        setMovies(movieDetails as never[]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao obter detalhes do filme:", error);
        setMovies([]);
        setLoading(false);
      });
  }, [favoritesData]);

  useEffect(() => {
    if (sorteado) {
      getMovieCredits(sorteado.id)
        .then((response) => {
          setCredits(response);
        })
        .catch((error) => {
          console.error("Erro ao obter créditos do filme:", error);
          setCredits(undefined);
        });
    }
  }, [sorteado]);

  function handleClick(movies: any) {
    const movie = movies[Math.floor(Math.random() * movies.length)];
    setSorteado(movie);
  }

  return (
    <>
      {loading ? (
        <SkeletonTantoFlixPage />
      ) : sorteado && movies.length > 0 ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "1rem",
              alignItems: "center",
            }}
          >
            <DefaultTitle
              text={translation[LanguageSelected].drawnMovieTitle}
              variant={["h5"]}
              align="left"
            />
            <Button
              onClick={() => handleClick(movies)}
              size="large"
              variant="contained"
              color="secondary"
            >
              {translation[LanguageSelected].drawNewMovieButton}
            </Button>
          </Box>

          <MovieCardRandom
            key={sorteado.id}
            movie={sorteado}
            credits={credits}
          />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <DefaultTitle
            text={
              movies.length > 0
                ? [translation[LanguageSelected].drawMoviePrompt]
                : [translation[LanguageSelected].noFavoritesMessage]
            }
          />
          {movies.length > 0 ? (
            <Button
              onClick={() => handleClick(movies)}
              size="large"
              variant="contained"
              color="secondary"
            >
              {translation[LanguageSelected].drawMovieButton}
            </Button>
          ) : (
            <Button size="large" variant="contained" color="secondary">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                href={"/"}
              >
                {" "}
                {translation[LanguageSelected].goToHomePageButton}
              </Link>
            </Button>
          )}
        </Box>
      )}
    </>
  );
}
