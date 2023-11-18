// src/app/layout.tsx
require("dotenv").config();
const apiKey = process.env.TMDB_API_KEY;
import CustomTheme from "@/styles/CustomTheme";
import { Container, CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ResponsiveDrawer from "@/components/Drawer";
import { FavoritesProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TantoFlix",
  description: "Um app de sorteio para sua lista de filmes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CustomTheme>
          <CssBaseline />
          <FavoritesProvider>
            <Container>
              <ResponsiveDrawer apiKey={apiKey}>{children}</ResponsiveDrawer>
            </Container>
          </FavoritesProvider>
        </CustomTheme>
      </body>
    </html>
  );
}
