import { Typography } from "@mui/material";

export default function DefaultTitle({ text }) {
  return (
    <Typography align="center" variant="h4">
      {text}
    </Typography>
  );
}
