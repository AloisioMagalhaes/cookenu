import { ThemeProvider } from "@mui/material";
import React from "react";
import Rotas from "./routes/Rotas";
import tema from "./const/tema";
function App() {
  return (
    <ThemeProvider theme={tema}>
      <Rotas />
    </ThemeProvider>
  );
}

export default App;
