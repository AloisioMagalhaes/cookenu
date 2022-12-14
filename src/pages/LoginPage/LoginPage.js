import React from "react";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png";
import Button from "@mui/material/Button";
import LoginForm from "../LoginPage/LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../routes/index";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const history = useNavigate();
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm setRightButtonText={setRightButtonText} />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}>
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
