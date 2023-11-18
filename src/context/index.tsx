"use client";
import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFavorite = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== item.id)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
