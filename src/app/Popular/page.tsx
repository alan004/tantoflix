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

export default function  PopularMovies() {
  const [genres, setGenres] = useState<GenresResponse | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getGenresList().then((data) => {
      setGenres(data);
    });
    setIsLoading(false);
  }, []);
  
  return (
    <>
      <DefaultTitle
        text={["Favorite e sorteie entre os filmes de sua lista!"]}
      />
      {isLoading && <><Skeleton sx={{pt: '2em'}} /><SkeletonTantoFlixPage/></>}
      <GenresList genres={genres} />
    </>
  );
}
