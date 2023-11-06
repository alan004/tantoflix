import CustomTheme from "@/styles/CustomTheme";
import { Box, CssBaseline, Container } from "@mui/material";
import PopularMovies from "@/app/pages/Popular";
import ResponsiveDrawer from "@/components/Drawer";
require("dotenv").config();
const apiKey = process.env.TMDB_API_KEY;
export default async function Home() {
  return (
    <>
      <CustomTheme>
        <CssBaseline />
        <Container>
          <ResponsiveDrawer>
            <PopularMovies apiKey={apiKey} />
          </ResponsiveDrawer>
        </Container>
      </CustomTheme>
    </>
  );
}
