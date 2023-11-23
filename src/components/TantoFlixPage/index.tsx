require("dotenv").config();
const apiKey = process.env.TMDB_API_KEY;
import { Box } from "@mui/material";
import MovieCard from "../MovieCard";
import SkeletonTantoFlixPage from "./Skeleton";
import Footer from "../Footer";

export default function TantoFlixPage({ movies }) {
  return (
    <>
      {movies ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            flexWrap: "wrap",
            gap: "1rem",
            padding: "1rem 0",
          }}
        >
          {movies.map((e) => (
            <MovieCard movie={e} key={e.id} apiKey={apiKey} />
          ))}
        </Box>
      ) : (
        <SkeletonTantoFlixPage />
      )}
      <Footer />
    </>
  );
}
