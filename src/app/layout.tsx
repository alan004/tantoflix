// src/app/layout.tsx
import CustomTheme from "@/styles/CustomTheme";
import { Container, CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ResponsiveDrawer from "@/components/Drawer";

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
          <Container>
            <ResponsiveDrawer>{children}</ResponsiveDrawer>
          </Container>
        </CustomTheme>
      </body>
    </html>
  );
}
