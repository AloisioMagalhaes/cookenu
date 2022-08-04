import { createTheme } from "@mui/styles";
import { corPrimaria, corNeutra } from "./cores";
const tema = createTheme({
  palette: {
    primary: {
      main: corPrimaria,
      contrastText: "white"
    },
    text: {
      primary: corNeutra
    }
  }
});

export default tema;
