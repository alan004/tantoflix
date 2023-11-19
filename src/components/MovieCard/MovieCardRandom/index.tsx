import { Typography, Box, CardMedia } from "@mui/material";

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
    flexDirecion: "row",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box sx={style}>
      <figure style={{ width: "50%" }}>
        <CardMedia
          component="img"
          height="auto"
          width="100%"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie poster"
        />
      </figure>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <Typography variant="h4">{movie.title}</Typography>
        <Typography variant="body2">{movie.runtime} minutos</Typography>
        <Typography variant="body2">{genreNames}</Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </div>
    </Box>
  );
}