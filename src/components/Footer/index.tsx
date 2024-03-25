"use client"
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material"
import git from "@/assets/github.svg"
import linkedin from "@/assets/linkedin.svg"
import Image from "next/image"
import { Typography, Container } from "@mui/material/"
import Link from "next/link"
import { useEffect, useState } from "react"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle"
import FavoriteIcon from "@mui/icons-material/Favorite"
import menu from "@/components/Drawer/menu.json"
import { useFavorites } from "@/context"
import { Idiomas } from "@/interfaces/Idiomas"

export default function Footer() {
  const drawerWidth = 240
  const [windowSize, setWindowSize] = useState(0)
  const actualPage = typeof window !== "undefined" ? window.location.pathname : ""

  const validateWindowSize = () => {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', validateWindowSize);
    validateWindowSize();
    return () => {
      window.removeEventListener('resize', validateWindowSize);
    }
  }, [])
  const { language } = useFavorites()
  type ChavesValidas = keyof Idiomas
  const LanguageSelected: ChavesValidas = language as ChavesValidas
  const iconesMenu = {
    "pt-BR": {
      Início: <HomeIcon />,
      Favoritos: <FavoriteIcon />,
      Sorteio: <ChangeCircleIcon />,
      Sobre: <InfoIcon />,
    },
    "en-US": {
      Home: <HomeIcon />,
      Favorites: <FavoriteIcon />,
      Draw: <ChangeCircleIcon />,
      About: <InfoIcon />,
    },
  }

  const DevelopedBy = () =>{
    return (
      <Container
        sx={{
          display: "flex",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          flexDirection: "row",
          justifyContent: "space-between",
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
            {language === "pt-BR"
              ? "Desenvolvido por Alan Abilio"
              : "Developed by Alan Abilio"}
          </Typography>
        </Link>
      </Container>
    )
  }

  return (
    <Box
      sx={{
        backgroundColor: "rgba(49, 7, 79, 0.8)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {windowSize < 680 && (
        <BottomNavigation
          sx={{
            display: { sm: "block", md: "none", lg: "none" },
            alignItems: "center",
            bottom: "40px",
            backgroundColor: "transparent",
          }}
          showLabels
        >
          {menu[LanguageSelected].map((e) => (
            <BottomNavigationAction
              key={e.id}
              label={e.name}
              href={e.path}
              icon={
                iconesMenu[LanguageSelected][
                  e.name as keyof (typeof iconesMenu)[ChavesValidas]
                ]
              }
            />
          ))}
        </BottomNavigation>
      )}
    {(windowSize >= 680 || actualPage === "/About") && <DevelopedBy />}
    </Box>
  )
}
