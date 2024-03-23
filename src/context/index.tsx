"use client";
import FavoritesData, {
  FavoritesListProps,
} from "@/interfaces/Favorites.interface";
import SorteadoProps from "@/interfaces/Sorteado.interface";
import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext<FavoritesData | undefined>(undefined);

export const FavoritesProvider = ({ children }: any) => {
  const isClient = typeof window !== "undefined";
  const storedFavorites = isClient ? localStorage.getItem("favorites") : null;
  const initialFavorites =
    typeof storedFavorites === "string" ? JSON.parse(storedFavorites) : [];
  const [favorites, setFavorites] =
    useState<FavoritesListProps[]>(initialFavorites);
  const initialLanguage = isClient ? localStorage.getItem("language") || "pt-BR" : "pt-BR";
  const [language, setLanguage] = useState<string>(initialLanguage);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, isClient]);

  const addFavorite = (item: FavoritesListProps) => {
    setFavorites((prevFavorites: any) => [...prevFavorites, item]);
  };

  const removeFavorite = (item: SorteadoProps) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== item.id)
    );
  };

  useEffect(() => {
      localStorage.setItem("language", language);
  }, [language]);

  const contextValue: FavoritesData = {
    favorites,
    addFavorite,
    removeFavorite,
    language,
    setLanguage,
  };
  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
