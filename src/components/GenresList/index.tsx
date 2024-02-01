'use client';
import { getPopularMovies } from "@/api/getPopularMovies";
import { filterGenres } from "@/functions";
import { GenresListProps } from "@/interfaces/Genres.interface";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import TantoFlixPage from "../TantoFlixPage";
import SkeletonTantoFlixPage from "../TantoFlixPage/Skeleton";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";

const GenresList: React.FC<GenresListProps> = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  const handleGenreClick = async (genreId: number) => {
      const result = await filterGenres(genreId);
      setMovies(result.results);
      setIsLoading(false);
      setIsAccordionOpen(false);

  }; 
  const getAllMovies = async () => {
    const result = await getPopularMovies();
    setMovies(result.results);
    setIsLoading(false);
    setIsAccordionOpen(false);
  }
  const isMobile = useMediaQuery("(max-width: 768px)");

  const renderButtons = () => {
    return(
    <Box sx={{display: 'flex', gap: '4px', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' , '@media (min-width: 769px)':{justifyContent: 'center'}}}>
    {genres &&(
      <Button onClick={()=>getAllMovies()} size="small"
      variant="contained" sx={{fontSize: '8px', minWidth: '100px'}}
      color="secondary" key="all">Todos</Button>)
    }        
    {genres?.genres?.map((genre) => 
    <Button onClick={()=> handleGenreClick(genre.id)} size="small"
      variant="contained" sx={{fontSize: '8px', minWidth: '100px'}}
      color="secondary" key={genre.id}>{genre.name}</Button>)}
    </Box>
    )
  }
  
  return (
    <>
    {isMobile ? (<Accordion TransitionProps={{ timeout: 1000}} expanded={isAccordionOpen} onChange={() => setIsAccordionOpen(!isAccordionOpen)} sx={{bgcolor: 'transparent', margin: '16px 0'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownCircleOutlined />}
        >
          <Typography>Categorias</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {renderButtons()}
        </AccordionDetails>
      </Accordion>) : renderButtons()
      }
      {isLoading ? <SkeletonTantoFlixPage/> : <TantoFlixPage movies={movies} />}
      </>
  )
}

export default GenresList;