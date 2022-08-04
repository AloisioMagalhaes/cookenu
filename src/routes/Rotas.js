import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipesDetailPage from "../pages/RecipesDetailPage/RecipesDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Header from "../components/Header";
export default function Rotas() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>
        <Route exact path="/">
          <RecipesListPage />
        </Route>
        <Route exact path="/detalhe/:id">
          <RecipesDetailPage />
        </Route>
        <Route exact path="/adicionar-receita">
          <AddRecipesPage />
        </Route>
        <Route>
          <div>
            <h1>deu erro</h1>
          </div>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
