import React from "react";
import MiniDrawer from "./MiniDrawer.js";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";


let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2a403D",
      variant: "#d05663",
    },
    secondary: {
      main: "#748b6f",
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <MiniDrawer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
