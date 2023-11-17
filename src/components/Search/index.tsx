import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({ onSearch }) {
  const [inputContent, setInputContent] = React.useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    onSearch(inputContent);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleFormSubmit}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        backgroundColor: "secondary.dark",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Procure pelo seu filme"
        inputProps={{ "aria-label": "procure pelo filme" }}
        onChange={(e) => setInputContent(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
