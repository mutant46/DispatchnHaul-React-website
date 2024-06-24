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
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Error from "./pages/404";
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
      main: "#D5D8DC",
      500: "#F8F9F9",
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
      <main style={{ backgroundColor: "black" }}>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/services" render={() => <Sevices />} />
          <Route exact path="/pricing" render={() => <Pricing />} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/privacy-policy" render={() => <PrivacyPolicy />} />
          <Route render={() => <Error />} />
        </Switch>
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
