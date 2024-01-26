import itens from "../Drawer/menu.json";
import { List, ListItem } from "@mui/material";

export default function Menu() {
  return (
    <List sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
      {itens.map((item: any) => (
        <ListItem key={item.id}>{item.name}</ListItem>
      ))}
    </List>
  );
}
