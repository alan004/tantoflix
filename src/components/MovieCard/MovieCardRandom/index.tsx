'use client'
import { Typography, Box, CardMedia } from "@mui/material";
import sampleImage from "../MoviePoster.png";
import samples from "../samples.json";
import MovieCardDetailsProps from "@/interfaces/Movie.interface";
import { ratingConverter } from "@/functions";
import { Star } from "@mui/icons-material";
import { useFavorites } from "@/context";

export default function MovieCardRandom({
  movie,
  credits,
}: MovieCardDetailsProps) {
  const language = useFavorites().language;
  const genreNames = movie?.genres.map((genre) => genre.name).join(", ");
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
            movie?.poster_path != null
              ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
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
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          {movie?.title}
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <Typography variant="body1">{movie?.runtime} {language === 'pt-BR' ? 'minutos' : ' minutes' }</Typography>
          {movie?.vote_average !== undefined && (
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '4px'}}>
                <Typography variant="body1">{ratingConverter(movie.vote_average)}</Typography>
                <Star sx={{width:'.8em', height:'.8em'}} color="secondary"/>
            </Box>
            )}
        </Box>
        <Typography variant="body2">{genreNames}</Typography>
        <Typography variant="body2" color="text.secondary">
          {movie?.overview != "" ? movie?.overview : samples.descricao}
        </Typography>
        <Box>
          <Typography variant="body1">{language === 'pt-BR' ? 'Elenco' : 'Cast' }</Typography>
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
            {credits?.cast.slice(0, 3).map((credit) => (
            <Typography
              variant="body2"
              key={credit.id}
              color="text.secondary"
            >
              {credit.name}
            </Typography>
          ))}
          </Box>  
          <Typography sx={{pt: '.5rem'}} variant="body1">{language === 'pt-BR' ? 'Direção' : 'Director' }</Typography>
          <Box
              sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
            {credits?.crew
                .filter((person) => person.job === 'Director')
                .slice(0, 2)
                .map((director) => (
                <Typography
                    variant="body2"
                    key={director.id}
                    color="text.secondary">
                  {director.name}
                </Typography>
            ))}
        </Box>
        </Box>
      </Box>
    </Box>
  );
}
