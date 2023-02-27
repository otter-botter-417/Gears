import { ItemPage } from "./components/pages/ItemPage";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Typography } from "@mui/material";
import ItemAppendPage from "./components/pages/ItemAppendPage";
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

const props = {
  itemName: "HOZ-ST",
  brandName: "ogawa",
  price: 55000,
  openSize: {
    wide: 255,
    depth: 245,
    high: 120,
  },
  storageSize: {
    wide: 52,
    depth: 20,
    high: 18,
  },
  weight: 3.34,
  capacity: 2,
  innerTent: "付属",
  grandSheet: "なし",
  accessories: ["張り綱1.5m4本", "アルミピン12本"],
};

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
      poster: {
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
      <Typography
        variant="ItemDataText"
        fontFamily="Zen Old Mincho"
      ></Typography>
      <ItemAppendPage />
      <ItemPage tentAbility={props} />
    </ThemeProvider>
  );
}
