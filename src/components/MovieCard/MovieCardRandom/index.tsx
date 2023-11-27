import { Typography, Box, CardMedia } from "@mui/material";
import sampleImage from "../MoviePoster.png";
import samples from "../samples.json";

export default function MovieCardRandom({
  movie,
}: {
  movie: {
    id: number;
    poster_path: string;
    title: string;
    genres: string[];
    runtime: number;
    overview: string;
  };
}) {
  const genreNames = movie.genres.map((genre) => genre.name).join(", ");
  const style = {
    width: "100%",
    height: "auto",
    display: "flex",
    borderRadius: ".5rem",
    gap: "1rem",
    flexDirection: "column",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    marginBottom: "1.5rem",
    "@media (min-width: 680px)": {
      flexDirection: "row",
    },
  };
  return (
    <Box sx={style}>
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
          alignItems: "flex-start",
          gap: "1rem",
          textAlign: "justify",
        }}
      >
        <Typography variant="h4">{movie.title}</Typography>
        <Typography variant="body2">{movie.runtime} minutos</Typography>
        <Typography variant="body2">{genreNames}</Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview != "" ? movie.overview : samples.descricao}
        </Typography>
      </Box>
    </Box>
  );
}
