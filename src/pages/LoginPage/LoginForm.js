import React from "react";
import { InputsContainer, LoginFormContainer } from "./styled";
import TextField from "@mui/styles";
import Button from "@mui/material/Button";
import useForm from "../../hooks/useForm";
import login from "../../services/user";
import { useNavigate } from "react-router-dom";
//import CircularProgress from "@material-ui/core/CircularProgress";

const LoginForm = ({ setRightButtonText }) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useNavigate();
  //const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history);
    //login(form, clear, history, setRightButtonText, setIsLoading);
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
        </InputsContainer>
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}>
          fazer login
        </Button>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
