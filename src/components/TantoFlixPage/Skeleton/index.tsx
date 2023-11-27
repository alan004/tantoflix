import { Box, Skeleton } from "@mui/material";

export default function SkeletonTantoFlixPage() {
  const moviesSample = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1rem 0",
          "@media (min-width: 680px)": {
            justifyContent: "left",
          },
        }}
      >
        {moviesSample.map((e) => (
          <Skeleton width={275} height={200} key={e} />
        ))}
      </Box>
    </>
  );
}
