import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieCardModal from "./MovieCardModal";
import { Truculenta } from "next/font/google";

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
    longDescription.length > maxLength
      ? longDescription.slice(0, maxLength).trimEnd() + "..."
      : longDescription;

  const longDescription = truncateString(movie.overview, 160);
  const description = longDescription;
  const longTitle = truncateString(movie.title, 38);
  const title = longTitle ? longTitle : movie.title;

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardMedia
        component="img"
        alt="movie poster"
        height="412.5px"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "275px",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 5,
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ paddingBottom: "1rem" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <MovieCardModal movie={movieID} apiKey={apiKey} />
        </CardActions>
      </Box>
    </Card>
  );
}
