import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddRecipesPage = () => {
  useProtectedPage();
  return (
    <div>
      <h1>add</h1>
    </div>
  );
};
export default AddRecipesPage;
