"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Search from "../Search";
import itens from "./menu.json";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import logo from "./TantoflixLogo.png";
import Image from "next/image";
import Footer from "../Footer";
import LanguageSelector from "../LanguageSelector";
import { Idiomas } from "@/interfaces/Idiomas";
import { useFavorites } from "@/context";

const drawerWidth = 240;

export default function ResponsiveDrawer(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
  const language = useFavorites().language;
  type ChavesValidas = keyof Idiomas;
  const LanguageSelected: ChavesValidas = language as ChavesValidas;
  const drawer = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box>
        <Toolbar>
          <Image alt="logo Tantoflix" src={logo} width={300} height={40} />
        </Toolbar>
        <Divider />
        <List>
          {itens[LanguageSelected].map((e) => (
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
              href={e.path}
              key={e.name}
            >
              <ListItem key={e.name} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {Object.keys(iconesMenu[LanguageSelected]).includes(
                      e.name
                    ) && (
                      <ListItemIcon>
                        {
                          iconesMenu[LanguageSelected][
                            e.name as keyof (typeof iconesMenu)[ChavesValidas]
                          ]
                        }
                      </ListItemIcon>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={e.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Box>
      <Box sx={{paddingBottom: '1rem'}}>
      <LanguageSelector />
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "transparent",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            width: "100%",
            gap: ".5rem",
          }}
        >
          <Box sx={{'@media (min-width: 680px)': {display: 'none'}}} >
            <LanguageSelector />
          </Box>
          <Search />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "secondary.dark",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
          },
        }}
      >
        <Toolbar />
        <>
          {props.children}
          <Footer />
        </>
      </Box>
    </Box>
  );
}
