import React from "react";
import TextField from "@mui/material";
import Button from "@mui/material";
import { InputsContainer, SignUpFormContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
//import { signUp } from "../../services/user";
//import CircularProgress from "@material-ui/core/CircularProgress";

const SignUpForm = ({ setRightButtonText }) => {
  const history = useNavigate();
  const [form, onChange] = useForm({
    name: "",
    email: "",
    password: ""
  });
  //const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    //signUp(form, clear, history, setRightButtonText, setIsLoading);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={"name"}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            value={form.email}
            name={"email"}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            type={"email"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            value={form.password}
            name={"password"}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            type={"password"}
            fullWidth
            required
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth>
          fazer cadastro
        </Button>
      </SignUpFormContainer>
    </form>
  );
};

export default SignUpForm;
