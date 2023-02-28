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
    },
    text: {
      secondary: "#616161",
      disabled: "#616161",
      primary: "#4a4343",
    },
    error: {
      main: "#b33d3d",
    },
    warning: {
      main: "#ed6c02",
    },
    success: {
      main: "#2e7d32",
      contrastText: "#ff1744",
    },
  },
  typography: {
    fontFamily: "Zen Old Mincho",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: "#689f38",
          color: "#fff",
        },
      },
    },
  },
};
