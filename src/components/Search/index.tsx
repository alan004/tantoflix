"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
  const [inputContent, setInputContent] = React.useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (inputContent) {
      params.set("query", inputContent);
    } else {
      params.delete("query");
    }
    replace(
      `${pathname.includes("query") ? "" : "Searched?"}${params.toString()}`
    );
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
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => setInputContent(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
