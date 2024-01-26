import DefaultTitleProps from "@/interfaces/Components.interface";
import { Typography } from "@mui/material";

export default function DefaultTitle({
  text,
  variant = "h4",
  align = "center",
}: DefaultTitleProps) {
  return (
    <Typography align={align} variant={variant as any}>
      {text}
    </Typography>
  );
}
