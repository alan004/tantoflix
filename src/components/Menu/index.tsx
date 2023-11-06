import itens from './menu.json'
import { List, ListItem } from '@mui/material'


export default function Menu() {
    return (
        <List sx={{width: "100%", display:"flex", flexDirection: "row"}}>
            {itens.map((item) => (
                <ListItem key={item.id}>{item.name}</ListItem>
            ))}
        </List>
    )
}