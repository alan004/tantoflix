// src/app/layout.tsx
import CustomTheme from "@/styles/CustomTheme";
import { Container, CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ResponsiveDrawer from "@/components/Drawer";
import { FavoritesProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TantoFlix",
  description: "Um app para cinéfilos indecisos",
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
              <ResponsiveDrawer>{children}</ResponsiveDrawer>
            </Container>
          </FavoritesProvider>
        </CustomTheme>
      </body>
    </html>
  );
}
