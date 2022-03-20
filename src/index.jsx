import ReactDOM from "react-dom";
import React, { useEffect } from "react";
// local components
import App from "./App";
// router
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
// material ui
import CssBaseline from "@mui/material/CssBaseline";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Index = () => {
  return (
    <React.StrictMode>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop />
        <CssBaseline />
        <App />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
