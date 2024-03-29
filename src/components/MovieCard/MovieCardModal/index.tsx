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
import { Button, Modal, Skeleton, useMediaQuery } from "@mui/material";
import { useState } from "react";
import MovieCardDetails from "../MovieCardDetails";
import { getMovieDetails } from "@/api/getMovieDetails";
import { getMovieCredits } from "@/api/getMovieCredits";
import { MovieCardCreditsProps } from "@/interfaces/Movie.interface";
import { useFavorites } from "@/context";

export default function MovieCardModal({ movie }: { movie: number }) {
  const [open, setOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [credits, setCredits] = useState<MovieCardCreditsProps | undefined>(undefined);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const language = useFavorites().language;


  const handleOpen = async () => {
    const details = await getMovieDetails(movie);
    setMovieDetails(details);
    const response = await getMovieCredits(movie);
    setCredits(response);
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
        size={isMobile ? "small" : "large"}
        variant="contained"
        color="secondary"
      >
        {language === "pt-BR"
          ? isMobile
            ? "Mais"
            : "Ver mais"
          : isMobile
          ? "More"
          : "See more"}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ backdropFilter: "blur(5px)" }}
      >
        {movieDetails ? (
          <MovieCardDetails movie={movieDetails} credits={credits} />
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
  )
}
