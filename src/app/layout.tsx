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
  let language = "pt-BR"; // Valor padrão
  
  if (typeof window !== "undefined" && window.localStorage) {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      language = storedLanguage;
    }
  }
  return (
    <html lang={language}>
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