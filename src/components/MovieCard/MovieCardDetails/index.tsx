"use client";
import { Typography, Box, CardMedia, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "@/context";
import sampleImage from "../MoviePoster.png";
import samples from "../samples.json";
import MovieCardDetailsProps from "@/interfaces/Movie.interface";
import { ratingConverter } from "@/functions/ratingConverter";
import { Star } from "@mui/icons-material";


export default function MovieCardDetails({
  movie,
  credits,
}: MovieCardDetailsProps) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite =
    favorites && favorites.some((fav: any) => fav.id === movie?.id);

  const genreNames = movie?.genres.map((genre: any) => genre.name).join(", ");

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
            movie?.poster_path != null
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
          {movie?.title}
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Typography variant="body1">{movie?.runtime} minutos</Typography>
          {movie?.vote_average !== undefined && (
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '4px'}}>
                <Typography variant="body1">{ratingConverter(movie.vote_average)}</Typography>
                <Star sx={{width:'.8em', height:'.8em'}} color="secondary"/>
            </Box>
            )}
        </Box>
        <Typography variant="body1">{genreNames}</Typography>
        <Box sx={{ maxHeight: "150px",
              overflowY: "auto", 
              flex: "1", 
              "@media (min-width: 680px)": {
                maxHeight: "400px",
              }}}>
          <Typography variant="body2" color="text.secondary">
            {movie?.overview != "" ? movie?.overview : samples.descricao}
          </Typography>
        </Box>
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
            {credits?.slice(0, 3).map((credit) => (
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
            if (movie) {
              isFavorite ? removeFavorite(movie) : addFavorite(movie);
            }
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
