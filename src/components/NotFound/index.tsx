'use client'
import { Box, CardMedia, Typography } from "@mui/material";
import image from "@/assets/not found.jpg";
import NotFoundProps from "../../interfaces/NotFound.interface";
import { useFavorites } from "@/context";

export default function NotFound({ texto }: NotFoundProps) {
  const language = useFavorites().language;

  const style = {
    width: "100%",
    height: "auto",
    borderRadius: ".5rem",
    display: "flex",
    flexDirection: "column",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,

    margin: "1rem  0 2rem",
  };
  return (
    <Box sx={style}>
      <Typography variant="h5" sx={{ p: ".75rem" }}>
        {texto}. {language === 'pt-BR' ? 'Fique com este gatinho no lugar :D' : 'Here is cat instead :D'}
      </Typography>
      <CardMedia
        component="img"
        height="auto"
        width="100%"
        sx={{
          margin: "0",
          borderBottomLeftRadius: ".5rem",
          borderBottomRightRadius: ".5rem",
        }}
        image={image.src}
        alt="not found"
      />
    </Box>
  );
}
