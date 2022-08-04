import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { StyledToolbar } from "./styled";
import Button from "@mui/material/Button";
import { goToRecipesList, goToLogin } from "../routes/index";
import { useNavigate } from "react-router-dom";
export default function ButtonAppBar() {
  const history = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToRecipesList(history)} color="inherit">
            Cookenu
          </Button>
          <Button onClick={() => goToLogin(history)} color="inherit">
            Login
          </Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
