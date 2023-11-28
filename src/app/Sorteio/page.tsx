"use client";
import { getMovieDetails } from "@/api/getMovieDetails";
import { useFavorites } from "@/context";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import MovieCardRandom from "@/components/MovieCard/MovieCardRandom";
import Link from "next/link";
import DefaultTitle from "@/components/DefaultTitle";
import { getMovieCredits } from "@/api/getMovieCredits";

export default function Sorteio() {
  const apiKey = process.env.TMDB_API_KEY;
  const { favorites } = useFavorites();
  const [movies, setMovies] = useState([]);
  const [sorteado, setSorteado] = useState();
  const [credits, setCredits] = useState([]);

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

  useEffect(() => {
    if (sorteado) {
      getMovieCredits(sorteado.id)
        .then((response) => {
          setCredits(response.cast);
        })
        .catch((error) => {
          console.error("Erro ao obter créditos do filme:", error);
          setCredits([]);
        });
    }
  }, [sorteado, apiKey]);

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
              alignItems: "center",
            }}
          >
            <DefaultTitle
              text={["O filme sorteado foi:"]}
              variant={["h5"]}
              align="left"
            />
            <Button
              onClick={() => handleClick(movies)}
              size="large"
              variant="contained"
              color="secondary"
            >
              Sortear novo filme
            </Button>
          </Box>

          <MovieCardRandom
            key={sorteado.id}
            movie={sorteado}
            apiKey={apiKey}
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
