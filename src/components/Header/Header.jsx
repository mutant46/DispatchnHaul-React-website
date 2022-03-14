import * as React from "react";
// material ui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// react router
import { useHistory } from "react-router-dom";

const pages = [
  {
    id: 1,
    title: "Home",
    pageURL: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "Services",
    pageURL: "/services",
    icon: <MiscellaneousServicesIcon />,
  },
  {
    id: 3,
    title: "Pricing",
    pageURL: "/pricing",
    icon: <LocalOfferIcon />,
  },
  {
    id: 4,
    title: "Contact",
    pageURL: "/contact",
    icon: <MailIcon />,
  },
];

const Header = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isOpen, setIsOpen] = React.useState(false);
  const histroy = useHistory();
  const HandlePageClick = (pageURL) => {
    histroy.push(pageURL);
    setIsOpen(false);
  };

  return (
    <>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          display="flex"
          sx={{
            flexDirection: "column",
            width: "60vw",
            height: "100%",
            backgroundColor: "#1c1c1c",
            padding: "70px 0px",
            color: "white",
          }}>
          <List>
            {pages.map((page) => {
              const { title, pageURL, id, icon } = page;
              return (
                <ListItem
                  button
                  key={id}
                  onClick={() => HandlePageClick(pageURL)}
                  sx={{
                    mb: "2em",
                  }}>
                  <ListItemIcon sx={{ color: "white" }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={(theme) => ({
            backgroundColor: "#1c1c1c",
            padding: "10px 15px",
            [theme.breakpoints.down("sm")]: {
              padding: "10px 7px",
            },
          })}>
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setIsOpen(true)}
                  sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
                <NavbarBrand history={histroy} />
              </>
            ) : (
              <>
                <NavbarBrand history={histroy} />
                <Box
                  display="flex"
                  sx={{
                    marginLeft: "auto ",
                  }}>
                  {pages.map((page) => {
                    const { title, pageURL, id } = page;
                    return (
                      <Typography
                        key={id}
                        variant="h7"
                        component="div"
                        sx={{
                          ml: 7,
                          cursor: "pointer",
                          letterSpacing: "1px",
                          "&:hover": {
                            color: "red",
                          },
                        }}
                        onClick={() => HandlePageClick(pageURL)}>
                        {title}
                      </Typography>
                    );
                  })}
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

const NavbarBrand = ({ history }) => {
  return (
    <>
      <Typography
        variant="h4"
        component="div"
        sx={{
          cursor: "pointer",
        }}
        onClick={() => history.push("/")}>
        Logo
      </Typography>
    </>
  );
};

export default Header;
