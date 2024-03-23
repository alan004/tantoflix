"use client";
import { useEffect, useState } from "react";
import TantoFlixPage from "@/components/TantoFlixPage";
import { getMovieBySearch } from "@/api/getMovieBySearch";
import { useSearchParams } from "next/navigation";
import SkeletonTantoFlixPage from "@/components/TantoFlixPage/Skeleton";
import NotFound from "@/components/NotFound";
import DefaultTitle from "@/components/DefaultTitle";
import translations from '@/app/translations.json'
import { Idiomas } from "@/interfaces/Idiomas"
import { useFavorites } from "@/context";

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState<{ results: any[] | never[] }>({ results: [] });
  const [movieNotFoundMessage, setMovieNotFoundMessage] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const firstRequest = movies.results.length === 0;

  const { language } = useFavorites();
  type ChavesValidas = keyof Idiomas;
  const LanguageSelected: ChavesValidas = language as ChavesValidas;
  const translation = translations.searchedPage;

  useEffect(() => {
    let timeoutId: any;

    if (query) {
      setMovieNotFoundMessage(false);
      clearTimeout(timeoutId);
      getMovieBySearch(query as string, page)
        .then((result) => {
          firstRequest ? setMovies(result) : setMovies((prevMovies) => ({ results: [...prevMovies.results, ...(result?.results || [])] }));
          setTotalPages(result.total_pages)
          timeoutId = setTimeout(() => {
            if (result.results.length === 0) {
              setMovieNotFoundMessage(true);
            }
          }, 2000);
        })
        .catch((error) => {
          console.error("Erro ao obter resultados da pesquisa:", error);
        });
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, page]);

 
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY + 500 >= document.body.offsetHeight && page < totalPages) {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages))
      }
    };
   useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, totalPages]);
  

  return (
    <div>
      <DefaultTitle text={translation[LanguageSelected].pageTitle} />
      {movieNotFoundMessage ? (
        <NotFound texto={["Nenhum filme encontrado"]} />
      ) : movies.results.length > 0 ? (
        <TantoFlixPage movies={movies.results} />  
      ) : (
        <SkeletonTantoFlixPage />
      )}
    </div>
  );
};

export default SearchResults;
