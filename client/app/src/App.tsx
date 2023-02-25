import React from "react";
import ReactDOM from "react-dom";
import { ItemPage } from "./components/pages/ItemPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";

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
  const theme = createTheme({
    palette: { primary: blue },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ItemPage tentAbility={props} />
      </ThemeProvider>
    </div>
  );
}
