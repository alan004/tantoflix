import MovieCard from "@/components/MovieCard";
import { getPopularMovies } from "@/api/getPopularMovies";
import { Box, Skeleton } from "@mui/material";
import getApiKey from "@/api/getApiKey";
export default async function PopularMovies(apiKey) {
  const apiString = getApiKey(apiKey);
  const response = await getPopularMovies(apiString);
  const movies = response.results;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "1rem 0",
      }}
    >
      {movies ? (
        movies.map((e) => <MovieCard movie={e} key={e.id} apiKey={apiString} />)
      ) : (
        <>
          <Skeleton width={275} />
          <Skeleton width={275} />
          <Skeleton width={275} />
        </>
      )}
    </Box>
  );
}
