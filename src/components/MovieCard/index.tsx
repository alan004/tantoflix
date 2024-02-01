"use client";
import * as React from "react";
import { useFavorites } from "@/context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieCardModal from "./MovieCardModal";
import sampleImage from "./MoviePoster.png";
import samples from "./samples.json";
import MovieCardProps from "@/interfaces/Movie.interface";

export default function MovieCard({ movie }: MovieCardProps | any) {
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
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites && favorites.some((fav) => fav.id === movie.id);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 820px)");

  return (
    <Card sx={{maxWidth: isMobile ? '145px' : isTablet ? '226px' : '257px', minWidth: '145px'}}>
      <CardMedia
        component="img"
        alt="movie poster"
        height={isMobile ? '200px': isTablet ? '300px' : '412.5px' }
        image={
          movie.poster_path != null
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : sampleImage.src
        }
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: isMobile ? 'auto': '275px',
        }}
      >
        {isMobile ? (<></>) : (<CardContent>
          <Typography
            gutterBottom
            variant={isMobile ? 'body1': isTablet ? 'body1' : 'h5' }
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
              textAlign: "justify",
            }}
          >
            {description != "" ? description : samples.descricao}
          </Typography>
        </CardContent>)}
        <CardActions sx={{ paddingBottom: "1rem" }}>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              if (movie) {
                isFavorite ? removeFavorite(movie) : addFavorite(movie);
              }
            }}
          >
            <FavoriteIcon
              sx={{ fontSize: "2rem" }}
              color={isFavorite ? "secondary" : "disabled"}
            />
          </IconButton>
          <MovieCardModal movie={movieID} />
        </CardActions>
      </Box>
    </Card>
  );
}
