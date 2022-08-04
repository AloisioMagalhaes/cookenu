import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin } from "../routes/index";

const useProtectedPage = () => {
  const history = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(history);
    }
  }, [history]);
};

export default useProtectedPage;
