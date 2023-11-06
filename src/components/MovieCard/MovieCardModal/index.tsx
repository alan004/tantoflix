"use client";
declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}
import * as React from "react";
import { Button, Modal, Skeleton } from "@mui/material";
import MovieCardDetails from "../MovieCardDetails";
import { getMovieDetails } from "@/api/getMovieDetails";

export default function MovieCardModal({
  movie,
  apiKey,
}: {
  movie: number;
  apiKey: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [movieDetails, setMovieDetails] = React.useState(null);
  const handleOpen = async () => {
    const details = await getMovieDetails(movie, apiKey);
    setMovieDetails(details);
    setOpen(true);
  };

  const handleClose = () => {
    setMovieDetails(null);
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        size="large"
        variant="contained"
        color="secondary"
      >
        Ver mais
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ backdropFilter: "blur(5px)" }}
      >
        {movieDetails ? (
          <MovieCardDetails movie={movieDetails} />
        ) : (
          <Skeleton
            variant="rectangular"
            width={400}
            height={400}
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
            }}
          />
        )}
      </Modal>
    </>
  );
}
