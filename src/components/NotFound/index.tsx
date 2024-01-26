import { Box, CardMedia, Typography } from "@mui/material";
import image from "@/assets/not found.jpg";
import NotFoundProps from "../../interfaces/NotFound.interface";

export default function NotFound({ texto }: NotFoundProps) {
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
        {texto}. Fique com este gatinho no lugar :D
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
