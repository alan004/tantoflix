'use client';
import DefaultTitle from "@/components/DefaultTitle"
import {
  Box,
  Typography,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material"
import funcionalidades from './funcionalidades.json'
import { LabelImportant } from "@mui/icons-material"
import { useFavorites } from "@/context"
import translations from '@/app/translations.json'
import { Idiomas } from "@/interfaces/Idiomas"

export default function AboutPage() {
  const { language } = useFavorites()
  type ChavesValidas = keyof Idiomas;
  const LanguageSelected: ChavesValidas = language as ChavesValidas;
  const translation = translations.aboutPage;
  const style = {
    width: "100%",
    height: "auto",
    display: "flex",
    borderRadius: ".5rem",
    gap: "3rem",
    flexDirection: "column-reverse",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    margin: "1.5rem 0",
    "@media (min-width: 680px)": {
      flexDirection: "row",
    },
  }
  const listStyle = {
    p: 0,
    "& li": {
      p: 0,
      m: 0,
    },
  }
  return (
    <>
      <DefaultTitle text={translation[LanguageSelected].title} />
      <Box sx={style}>
        <Box
          sx={{
            width: {
              sm: "100%",
              lg: "50%",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
            textAlign: "justify",
          }}
        >
          <Typography variant="body1">
            {" "}
            {translation[LanguageSelected].description}
          </Typography>
          <Divider sx={{ bgcolor: "secondary.main" }} />
          <Typography variant="body2" color="text.secondary">
          {translation[LanguageSelected].projectProposal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {translation[LanguageSelected].behindTheScenes}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              sm: "100%",
              lg: "50%",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
            textAlign: "flex-start",
          }}
        >
          <Typography variant="body1">
            {" "}
            {translation[LanguageSelected].featuresImplemented}
          </Typography>
          <Divider sx={{ bgcolor: "secondary.main" }} />
          <List sx={listStyle}>
            {funcionalidades[LanguageSelected].map((funcionalidade) => (
              <ListItem sx={{alignItems: 'center'}} key={funcionalidade.id}>
                <ListItemIcon sx={{minWidth: '30px'}}><LabelImportant></LabelImportant></ListItemIcon>
                <ListItemText>{funcionalidade.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  )
}
