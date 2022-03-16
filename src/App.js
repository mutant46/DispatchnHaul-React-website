import React from "react";
// React Router
import { Route, Switch } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// pages
import Home from "./pages/Home/Home";
import Sevices from "./pages/Services/Services";
// material-ui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import red from "@mui/material/colors/red";

const theme = createTheme({
  palette: {
    primary: {
      main: "#05c2c8",
    },
    secondary: {
      main: "#000",
    },
    info: {
      main: "#fff",
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "1.1rem",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/services" render={() => <Sevices />} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
