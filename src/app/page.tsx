import CustomTheme from "@/styles/CustomTheme";
import { Box, CssBaseline, Container } from "@mui/material";
import PopularMovies from "@/app/Popular/page";
import ResponsiveDrawer from "@/components/Drawer";

export default async function Home() {
  return (
    <>
      <PopularMovies />
    </>
  );
}
