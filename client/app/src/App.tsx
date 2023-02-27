import { ItemPage } from "./components/pages/ItemPage";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import ItemAppendPage from "./components/pages/ItemAppendPage";
import Header from "./components/pages/Header";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
    ItemDataText: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
    ItemDataText?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    ItemDataText: true;
  }
}

export default function App() {
  let theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#607d8b",
        contrastText: "#d6dade",
      },
      secondary: {
        main: "#37474f",
        contrastText: "#dfe4e4",
        light: "#4f5f69",
      },
      text: {
        secondary: "#616161",
        disabled: "#616161",
        primary: "#616161",
      },
      error: {
        main: "#b33d3d",
      },
      warning: {
        main: "#ed6c02",
      },
      success: {
        main: "#2e7d32",
      },
    },
    typography: {
      fontFamily: "Zen Old Mincho",

      poster: {
        color: "#4a4343",
      },
      h1: {
        color: "#4a4343",
      },
      h2: {
        color: "#4a4343",
      },
      h3: {
        color: "#4a4343",
      },
      h4: {
        color: "#4a4343",
      },
      h5: {
        color: "#4a4343",
        fontSize: "1.3rem",
      },
      h6: {
        fontSize: "1.1rem",
        color: "#4a4343",
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <ItemAppendPage /> */}
      <ItemPage />
    </ThemeProvider>
  );
}
