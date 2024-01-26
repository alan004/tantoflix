require("dotenv").config();
import { Box } from "@mui/material";
import MovieCard from "../MovieCard";
import SkeletonTantoFlixPage from "./Skeleton";
import MovieCardProps from "@/interfaces/Movie.interface";

export default function TantoFlixPage({ movies }: MovieCardProps | any) {
  return (
    <>
      {movies ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            padding: "1rem 0",
            marginBottom: "1rem",
            "@media (min-width: 1025px)": {
              justifyContent: "flex-start",
            },
          }}
        >
          {movies.map((e: any) => (
            <MovieCard movie={e} key={e.id} />
          ))}
        </Box>
      ) : (
        <SkeletonTantoFlixPage />
      )}
    </>
  );
}
