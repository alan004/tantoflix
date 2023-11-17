require("dotenv").config();
const apiKey = process.env.TMDB_API_KEY;
import { Box, Skeleton } from "@mui/material";
import MovieCard from "../MovieCard";

export default function TantoFlixPage({ movies }) {
  return (
    <>
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
          movies.map((e) => <MovieCard movie={e} key={e.id} apiKey={apiKey} />)
        ) : (
          <>
            <Skeleton width={275} />
            <Skeleton width={275} />
            <Skeleton width={275} />
          </>
        )}
      </Box>
    </>
  );
}
