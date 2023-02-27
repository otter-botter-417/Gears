import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
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
    background: {
      default: "#eff1ef",
      paper: "#eff1ef",
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
};
