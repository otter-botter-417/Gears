import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { Header } from "./components/pages/Header";
import { ItemPage } from "./components/pages/ItemPage";
import { themeOptions } from "./styles/themes/themeOptions";
import ItemAppendPage from "./components/pages/ItemAppendPage";

const theme = responsiveFontSizes(createTheme(themeOptions));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ pt: "64px" }}>
        <CssBaseline />
        <Header />
        <ItemPage />
        <ItemAppendPage />
      </Box>
    </ThemeProvider>
  );
}
