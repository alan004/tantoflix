"use client"
import { getPopularMovies } from "@/api/getPopularMovies"
import { filterGenres } from "@/functions"
import { GenresListProps } from "@/interfaces/Genres.interface"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material"
import { useEffect, useState } from "react"
import TantoFlixPage from "../TantoFlixPage"
import SkeletonTantoFlixPage from "../TantoFlixPage/Skeleton"
import { ArrowDropDownCircleOutlined } from "@mui/icons-material"
import MovieCardProps from "@/interfaces/Movie.interface"

const GenresList: React.FC<GenresListProps> = ({ genres }) => {
  const [movies, setMovies] = useState<MovieCardProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [isFiltered, setIsFiltered] = useState(false)
  const [genreId, setGenre] = useState(0)

  useEffect(() => {
    const firstRequest = movies.length === 0
    if (!isFiltered){
       getPopularMovies(page).then((data) => {     
        firstRequest ? setMovies(data.results) : setMovies((prevMovies) => [...prevMovies, ...data.results])   
        setIsLoading(false)
    })}  
    if (isFiltered) {
      filterGenres(genreId, page).then((data) => {
        firstRequest ? setMovies(data.results) : setMovies((prevMovies) => [...prevMovies, ...data.results])   
        setIsLoading(false)
      })
    }
  }, [page, genreId, isFiltered])

  const handleGenreClick = async (genreId: number) => {
    setIsLoading(true)
    setGenre(genreId)
    setIsFiltered(true)
    setMovies([])
    const result = await filterGenres(genreId, page)
    setMovies(result.results)
    setIsLoading(false)
    setIsAccordionOpen(false)
  }
  const getAllMovies = async () => {
    setIsLoading(true)
    setIsFiltered(false)
    setMovies([])
    const result = await getPopularMovies(1)
    setPage(1)
    setMovies(result.results)
    setIsLoading(false)
    setIsAccordionOpen(false)
  }

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY + 500 >= document.body.offsetHeight) {
      setPage((prevPage) => prevPage + 1)
    }
  }  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [page])

  const isMobile = useMediaQuery("(max-width: 768px)")
  const language = localStorage.getItem("language")

  const renderButtons = () => {
    return (
      <Box
        sx={{
          display: "flex",
          gap: "4px",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          "@media (min-width: 769px)": { justifyContent: "center" },
        }}
      >
        {genres && (
          <Button
            onClick={() => getAllMovies()}
            size="small"
            variant="contained"
            sx={{ fontSize: "8px", minWidth: "100px" }}
            color="secondary"
            key="all"
          >
            {language === "pt-BR" ? "Todos" : "All"}
          </Button>
        )}
        {genres?.genres?.map((genre) => (
          <Button
            onClick={() => handleGenreClick(genre.id)}
            size="small"
            variant="contained"
            sx={{ fontSize: "8px", minWidth: "100px" }}
            color="secondary"
            key={genre.id}
          >
            {genre.name}
          </Button>
        ))}
      </Box>
    )
  }

  return (
    <>
      {isMobile ? (
        <Accordion
          TransitionProps={{ timeout: 1000 }}
          expanded={isAccordionOpen}
          onChange={() => setIsAccordionOpen(!isAccordionOpen)}
          sx={{ bgcolor: "transparent", margin: "16px 0" }}
        >
          <AccordionSummary expandIcon={<ArrowDropDownCircleOutlined />}>
            <Typography>{language === 'pt-BR' ? 'Categorias' : 'Genres' }</Typography>
          </AccordionSummary>
          <AccordionDetails>{renderButtons()}</AccordionDetails>
        </Accordion>
      ) : (
        renderButtons()
      )}
      {isLoading ? (
        <SkeletonTantoFlixPage />
      ) : (
        <TantoFlixPage movies={movies} />
      )}
    </>
  )
}

export default GenresList
