import { Button } from "@mui/material";
import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const RecipesListPage = () => {
  useProtectedPage();
  return (
    <div>
      <h1>home</h1>
      <Button variant="contained" color="primary">
        Primaria
      </Button>
    </div>
  );
};
export default RecipesListPage;
