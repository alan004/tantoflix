import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieCardModal from "./MovieCardModal";

export default function MovieCard({
  movie,
  apiKey,
}: {
  movie: {
    id: number;
    poster_path: string;
    title: string;
    genres: string[];
    runtime: number;
    overview: string;
  };
  apiKey: string;
}) {
  const movieID = movie.id;
  //slice movie overview
  const truncateString = (longDescription: string, maxLength: number) =>
    longDescription.length <= maxLength
      ? longDescription
      : longDescription.slice(0, longDescription.lastIndexOf(" ", maxLength));

  const longDescription = truncateString(movie.overview, 201);
  const description = longDescription ? longDescription : movie.overview;

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardMedia
        component="img"
        alt="movie poster"
        height="auto"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <MovieCardModal movie={movieID} apiKey={apiKey} />
        </CardActions>
      </Box>
    </Card>
  );
}
