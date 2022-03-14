import ReactDOM from "react-dom";
import React from "react";
// local components
import App from "./App";
// router
import { BrowserRouter as Router } from "react-router-dom";
// material ui
import CssBaseline from "@mui/material/CssBaseline";

const Index = () => {
  return (
    <React.StrictMode>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
