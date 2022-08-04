import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToRecipesList } from "../routes/index";

const useUnprotectedPage = () => {
  const history = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToRecipesList(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
