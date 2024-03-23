'use client';
import { getGenresList } from "@/api/getGenresList";
import { getPopularMovies } from "@/api/getPopularMovies";
import DefaultTitle from "@/components/DefaultTitle";
import GenresList from "@/components/GenresList";
import TantoFlixPage from "@/components/TantoFlixPage";
import SkeletonTantoFlixPage from "@/components/TantoFlixPage/Skeleton";
import { GenresResponse } from "@/interfaces/Genres.interface";
import { Box, CircularProgress, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import translations from '@/app/translations.json'
import { Idiomas } from "@/interfaces/Idiomas"
import { useFavorites } from "@/context";

export default function  PopularMovies() {
  const [genres, setGenres] = useState<GenresResponse | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useFavorites();
  type ChavesValidas = keyof Idiomas;
  const LanguageSelected: ChavesValidas = language as ChavesValidas;
  const translation = translations.popularMovies;

  useEffect(() => {
    getGenresList().then((data) => {
      setGenres(data);
    });
    setIsLoading(false);
  }, []);
  
  return (
    <>
      <DefaultTitle
        text={translation[LanguageSelected].title}
      />
      {isLoading && <><Skeleton sx={{pt: '2em'}} /><SkeletonTantoFlixPage/></>}
      <GenresList genres={genres} />
    </>
  );
}
