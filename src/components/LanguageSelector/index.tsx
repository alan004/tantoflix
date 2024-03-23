import { US, BR } from 'country-flag-icons/react/3x2';
import { Box } from "@mui/material";
import { useFavorites } from "@/context";


export default function LanguageSelector() {
  const { setLanguage } = useFavorites();
  return (
    <Box sx={{ display: 'flex', gap: '4px', p: '1.5rem', '& svg': {cursor: 'pointer'}, justifyContent: 'space-evenly' }}>
    <BR width={32}
      title="Brazil"
      className="..."
      onClick={() => {setLanguage("pt-BR"), window.location.reload()}}
    />
    <US width={32}
      title="United States"
      className="..."
      onClick={() => {setLanguage("en-US"), window.location.reload()}} 
    />
  </Box>
  )
}