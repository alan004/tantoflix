import { Typography } from "@mui/material";

export default function DefaultTitle({
  text,
  variant = "h4",
  align = "center",
}) {
  return (
    <Typography align={align} variant={variant}>
      {text}
    </Typography>
  );
}
