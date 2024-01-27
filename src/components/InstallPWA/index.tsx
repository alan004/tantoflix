"use client";
import { useAddToHomescreenPrompt } from "@/hooks/assToHomeScreen";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const IntallPwaComponent = () => {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isPromptVisible, setIsPromptVisible] = useState(false);

  useEffect(() => {
    if (prompt) {
      setIsPromptVisible(true);
    }
  }, [prompt]);

  return (
    <>{isPromptVisible && <Button onClick={promptToInstall}>Install</Button>}</>
  );
};

export default IntallPwaComponent;
