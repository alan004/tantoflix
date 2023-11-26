import DefaultTitle from "@/components/DefaultTitle";
import { Box, Typography, CardMedia, Divider } from "@mui/material";
import selfie from "@/assets/alan.jpg";

export default function AboutPage() {
  const style = {
    width: "100%",
    height: "auto",
    display: "flex",
    borderRadius: ".5rem",
    gap: "1rem",
    flexDirecion: "row",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    margin: "1.5rem 0",
  };
  return (
    <>
      <DefaultTitle text={["Sobre o projeto"]} />

      <Box sx={style}>
        <figure style={{ width: "50%", margin: "0" }}>
          <CardMedia
            component="img"
            height="400px"
            width="100%"
            image={selfie.src}
            alt="foto do criador do site"
          />
        </figure>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <Typography variant="body1">
            {" "}
            Projeto criado para resolver o seu problema nunca saber o que
            assistir mesmo com a lista lotada!
          </Typography>
          <Divider sx={{ bgcolor: "secondary.main" }} />
          <Typography variant="body2" color="text.secondary">
            Me chamo Alan e depois de o perceber que passava mais tempo
            escolhendo filmes do que realmente assistindo, resolvi criar uma
            solução para este problema. A proposta é simples: ao invés de se
            perder em uma lista interminável de opções, você pode favoritar seus
            filmes preferidos. Quando chegar a hora da escolha, é só apertar um
            botão e deixar o destino cinematográfico ser decidido por sorteio.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nos bastidores, o site utiliza a API do TMDB para buscar informações
            sobre os filmes. Todo o desenvolvimento foi feito com React e
            TypeScript, com um toque especial da biblioteca Material-UI (MUI)
            para garantir uma interface bonita e intuitiva.
          </Typography>
        </div>
      </Box>
    </>
  );
}
