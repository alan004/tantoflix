import { Box } from "@mui/material";
import git from "@/assets/github.svg";
import linkedin from "@/assets/linkedin.svg";
import Image from "next/image";
import { Typography, Container } from "@mui/material/";
import Link from "next/link";

export default function Footer() {
  const drawerWidth = 240;
  const language = localStorage.getItem("language");
  return (
    <Container
      sx={{
        backgroundColor: "rgba(49, 7, 79, 0.8)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        display: "flex",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        flexDirection: "row",
        justifyContent: "space-between",
        position: "fixed",
        bottom: 0,
        left: 0,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "1rem",
          paddingTop: ".5rem",
        }}
      >
        <Link target="_blank" href="https://www.linkedin.com/in/alan-abilio/">
          <Image src={linkedin} alt="Logo Linkedin" />
        </Link>
        <Link target="_blank" href="https://github.com/alan004">
          <Image src={git} alt="Logo Github" />
        </Link>
      </Box>
      <Link
        target="_blank"
        href="https://github.com/alan004"
        style={{ textDecoration: "none" }}
      >
        <Typography
          sx={{ color: "white", fontSize: "14px", textDecoration: "none" }}
        >
          {language === 'pt-BR' ? 'Desenvolvido por Alan Abilio' : 'Developed by Alan Abilio'}
        </Typography>
      </Link>
    </Container>
  );
}
