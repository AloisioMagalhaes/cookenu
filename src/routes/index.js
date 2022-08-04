export const goToLogin = (history) => {
    history.push("/login");
  };
  
  export const goToSignUp = (history) => {
    history.push("/cadastro");
  };
  
  export const goToAddRecipes = (history) => {
    history.push("/adicionar-receita");
  };
  
  export const goToRecipeDetail = (history) => {
    history.push(`/detalhes/${id}`);
  };
  
  export const goToRecipesList = (history) => {
    history.push("/");
  };
  