"use client";
import { getMovieDetails } from "@/api/getMovieDetails";
import { useFavorites } from "@/context";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import MovieCardRandom from "@/components/MovieCard/MovieCardRandom";
import Link from "next/link";
import DefaultTitle from "@/components/DefaultTitle";

export default function Sorteio() {
  const apiKey = process.env.TMDB_API_KEY;
  const { favorites } = useFavorites();
  const [movies, setMovies] = useState([]);
  const [sorteado, setSorteado] = useState();

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

  function handleClick(movies: any) {
    const movie = movies[Math.floor(Math.random() * movies.length)];
    setSorteado(movie);
  }

  return (
    <>
      {sorteado && movies.length > 0 ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <DefaultTitle text={["O filme sorteado foi:"]} />
            <Button
              onClick={() => handleClick(movies)}
              size="large"
              variant="contained"
              color="secondary"
            >
              Sortear novo filme
            </Button>
          </Box>

          <MovieCardRandom key={sorteado.id} movie={sorteado} apiKey={apiKey} />
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
                ? ["Clique e sorteie um filme de sua lista de favoritos!"]
                : ["Parece que não há nenhum filme nos seus favoritos :("]
            }
          />
          {movies.length > 0 ? (
            <Button
              onClick={() => handleClick(movies)}
              size="large"
              variant="contained"
              color="secondary"
            >
              Sortear Filme
            </Button>
          ) : (
            <Button size="large" variant="contained" color="secondary">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                href={"/"}
              >
                {" "}
                Ir para página inicial
              </Link>
            </Button>
          )}
        </Box>
      )}
    </>
  );
}
