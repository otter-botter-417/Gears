import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { themeOptions } from "./themeOptions";
import { Header } from "./components/pages/Header";
import { ItemPage } from "./components/pages/ItemPage";

const theme = responsiveFontSizes(createTheme(themeOptions));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ItemPage />
    </ThemeProvider>
  );
}
