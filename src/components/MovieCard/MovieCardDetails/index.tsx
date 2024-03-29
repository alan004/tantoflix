"use client";
import { Typography, Box, CardMedia, IconButton, useMediaQuery } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "@/context";
import sampleImage from "../MoviePoster.png";
import samples from "../samples.json";
import MovieCardDetailsProps from "@/interfaces/Movie.interface";
import { ratingConverter } from "@/functions";
import { Star } from "@mui/icons-material";

export default function MovieCardDetails({
  movie,
  credits,
}: MovieCardDetailsProps) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite =
    favorites && favorites.some((fav: any) => fav.id === movie?.id);

  const genreNames = movie?.genres.map((genre: any) => genre.name).join(", ");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const language = useFavorites().language;

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
          width: "calc(100% - 3rem)",
        },
        "@media (min-width: 768px)": {
          width: "800px",
        },
        border: "none",
        boxShadow: 24,
        p: 4,
        bgcolor: isMobile ? "rgba(0, 0, 0, 0.75)" : "background.paper",
        backgroundImage: isMobile ? (movie?.poster_path != null
        ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
        : `url(${sampleImage.src})`) : "none",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        {isMobile ? (null):(<CardMedia
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
        />)}
        
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
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <Typography variant="body1">{movie?.runtime} {language === 'pt-BR' ? ' minutos' : ' minutes' }</Typography>
          {movie?.vote_average !== undefined && (
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '4px'}}>
                <Typography variant="body1">{ratingConverter(movie.vote_average)}</Typography>
                <Star sx={{width:'.8em', height:'.8em'}} color="secondary"/>
            </Box>
            )}
        </Box>
        <Typography variant="body1">{genreNames}</Typography>
        <Box sx={{ maxHeight: "200px",
              overflowY: "auto", 
              flex: "1", 
              "@media (min-width: 680px)": {
                maxHeight: "30vh",
              },
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#e95794a4',
                borderRadius: '4px',
              },
              }}>
          <Typography variant="body2" color="text.secondary" mr={.3}>
            {movie?.overview != "" ? movie?.overview : samples.descricao}
          </Typography>
        </Box>
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
