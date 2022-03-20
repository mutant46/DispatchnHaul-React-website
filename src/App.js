import React from "react";
// React Router
import { Route, Switch } from "react-router-dom";
// Components
import Header from "./components/Global/Header/Header";
import Footer from "./components/Global/Footer/Footer";
// pages
import Home from "./pages/Home/Home";
import Sevices from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Pricing from "./pages/Pricing/Pricing";
// material-ui
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <Route exact path="/pricing" render={() => <Pricing />} />
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
