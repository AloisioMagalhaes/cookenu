import BASE_URL from "../const/urls";
import axios from "axios";
import { goToRecipesList } from "../routes/index";
const login = (form, clear, history) => {
  axios
    .post(`${BASE_URL}user/login`, form)
    .then((res) => {
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      clear();
      goToRecipesList(history);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToRecipesList(history);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};
export default { signUp, login };
