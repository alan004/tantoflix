"use client";
import { Typography, Box, CardMedia, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "@/context";
import sampleImage from "../MoviePoster.png";
import samples from "../samples.json";
import { useEffect, useState } from "react";
import { getMovieCredits } from "@/api/getMovieCredits";

export default function MovieCardDetails({
  movie,
  credits,
}: {
  movie: {
    id: number;
    poster_path: string;
    title: string;
    genres: string[];
    runtime: number;
    overview: string;
  };
  credits: {
    id: number;
    name: string[];
  }[];
}) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites && favorites.some((fav) => fav.id === movie.id);
  const [creditos, setCreditos] = useState([]);

  const genreNames = movie.genres.map((genre) => genre.name).join(", ");

  return (
    <Box
      sx={{
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "auto",
        display: "flex",
        borderRadius: ".5rem",
        gap: "1.5rem",
        flexDirection: "column",
        "@media (min-width: 680px)": {
          flexDirection: "row",
          width: "800px",
        },
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "50%" },
          margin: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          width="100%"
          image={
            movie.poster_path != null
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : sampleImage.src
          }
          alt="movie poster"
          sx={{
            width: "60%",
            "@media (min-width: 680px)": {
              width: "100%",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          width: {
            sm: "100%",
            lg: "50%",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: { sm: "center", md: "flex-start" },
          gap: "1rem",
          textAlign: "justify",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          {movie.title}
        </Typography>
        <Typography variant="body1">{movie.runtime} minutos</Typography>
        <Typography variant="body1">{genreNames}</Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview != "" ? movie.overview : samples.descricao}
        </Typography>
        <Box>
          <Typography variant="body1">Elenco</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              width: "100%",
              textAlign: "center",
              gap: "1rem",
            }}
          >
            {credits.slice(0, 3).map((credit) => (
              <Typography
                variant="body2"
                key={credit.id}
                color="text.secondary"
              >
                {credit.name}
              </Typography>
            ))}
          </Box>
        </Box>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            isFavorite ? removeFavorite(movie) : addFavorite(movie);
          }}
          sx={{ textAlign: { sm: "center", md: "left" } }}
        >
          <FavoriteIcon
            sx={{ fontSize: "2em" }}
            color={isFavorite ? "secondary" : "disabled"}
          />{" "}
        </IconButton>
      </Box>
    </Box>
  );
}
