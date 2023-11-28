# Tantoflix

Construído em ReactJS, NextJS e Typescript, o Tantoflix é um projeto que visa solucionar a eterna dúvida "o que vou assistir hoje?". Com ele, você pode buscar por filmes, ver detalhes sobre eles e salvá-los em sua lista de favoritos para realizar um sorteio aleatório e decidir qual filme assistir.

## Tecnologias utilizadas

Como dito anteriormente, o projeto foi construído usando react e typescript, além de utilizar o NextJS para a renderização do lado do servidor. Somado a isso, utilizei a biblioteca Material UI para a construção e estilização dos componentes, o que gerou um app responsivo e com um design agradável.

Para a busca de filmes, foi utilizado o [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction), que fornece uma API REST com diversas informações sobre filmes, séries e atores. Neste projeto, foquei apenas em filmes. Toda a parte de busca e listagem de filmes foi feita utilizando os dados da API, você pode conferir as chamadas na pasta "api" do projeto.

## Funcionalidades

- Busca de filmes por nome
- Listagem de filmes populares
- Detalhes do filme
- Favoritar filmes/lista de favoritos
- Sorteio de filmes favoritos

## Aprendizados

O projeto me rendeu uma boa experiência com a utilização de Typescript (foi a primeira vez que usei a linguagem em um projeto completo), além de me fazer aprender mais sobre o NextJS e suas funcionalidades. Além disso, foi uma boa oportunidade para aprender mais sobre a utilização de APIs REST e como consumir seus dados. É possível ver nos próprios commits do projeto como eu fui aprendendo mais sobre a API e as formas de iniciar uma requisição. Sem dúvidas esse projeto me fez evoluir bastante como desenvolvedor.

## Como rodar o projeto

Para que o projeto rode em sua máquina, é preciso ter o NodeJS instalado e uma [chave da API do TMDB](https://developer.themoviedb.org/docs/getting-started). Após isso, basta clonar o repositório e configurar seu ambiente de desenvolvimento.

- Crie um arquivo .env.local na raiz do projeto e adicione sua chave de API conforme o exemplo em ".env.example"

- Depois disso basta instalar as dependências e rodar o projeto:

```bash
npm i

npm run dev
```

- O seu projeto estará rodando em http://localhost:3000
