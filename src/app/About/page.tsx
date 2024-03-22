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
import selfie from "@/assets/alan.jpg"
import funcionalidades from './funcionalidades.json'
import { LabelImportant } from "@mui/icons-material"

export default function AboutPage() {
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
      <DefaultTitle text={["Sobre o projeto"]} />

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
            Tantoflix, um app para cinéfilos indecisos!
          </Typography>
          <Divider sx={{ bgcolor: "secondary.main" }} />
          <Typography variant="body2" color="text.secondary">
            Me chamo Alan e depois de o perceber que passava mais tempo
            escolhendo filmes do que realmente assistindo, resolvi criar uma
            solução para este problema, o Tantoflix. A proposta é simples: ao
            invés de se perder em uma lista interminável de opções, você pode
            favoritar seus filmes preferidos. Quando chegar a hora da escolha, é
            só apertar um botão e deixar o destino cinematográfico ser decidido
            por sorteio.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nos bastidores, o site utiliza a API do TMDB para buscar informações
            sobre os filmes. Todo o desenvolvimento foi feito com React e
            TypeScript, com um toque especial da biblioteca Material-UI (MUI)
            para garantir uma interface bonita e intuitiva.
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
            Funcionalidades implementadas:
          </Typography>
          <Divider sx={{ bgcolor: "secondary.main" }} />
          <List sx={listStyle}>
            {funcionalidades.map((funcionalidade) => (
              <ListItem sx={{alignItems: 'center'}} key={funcionalidade.id}>
                <ListItemIcon sx={{minWidth: '30px'}}><LabelImportant></LabelImportant></ListItemIcon>
                <ListItemText>{funcionalidade.nome}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  )
}
