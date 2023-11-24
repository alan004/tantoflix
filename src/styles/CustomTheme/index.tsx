"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function CustomTheme(props: any) {
  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#31074f",
        paper: "#610C9F",
      },
      mode: "dark",
      primary: {
        main: "#610C9F",
        dark: "#610C9F",
        contrastText: "#fff",
      },
      secondary: {
        main: "#E95793",
        dark: "#DA0C81",
        contrastText: "#ffffff",
      },
    },
  });
  return <ThemeProvider theme={darkTheme}>{props.children}</ThemeProvider>;
}
