'use client';
import { Idiomas } from "@/interfaces/Idiomas";
import itens from "../Drawer/menu.json";
import { List, ListItem } from "@mui/material";
import { useFavorites } from "@/context";

export default function Menu() {
  const language = useFavorites().language;

  type ChavesValidas = keyof Idiomas;
  const LanguageSelected: ChavesValidas = language as ChavesValidas;
  return (
    <List sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
      {itens[LanguageSelected].map((item: any) => (
        <ListItem key={item.id}>{item.name}</ListItem>
      ))}
    </List>
  );
}
