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
      main: "#4bb46e",
      variant: "#4bb4a3",
    },
    secondary: {
      main: "#b44b91",
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
