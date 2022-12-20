import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Switch from "@material-ui/core/Switch";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="App">
          <h1>Dark Mode</h1>
          <Switch
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
          />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
