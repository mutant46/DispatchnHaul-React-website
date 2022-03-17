import * as React from "react";
// local components
import NavbarBrand from "../logo/logo";
import { pages } from "../../PageData";
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
// react router
import { useHistory } from "react-router-dom";

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
      <AppBar
        position="fixed"
        sx={(theme) => ({
          backgroundColor: "black",
          padding: [theme.spacing(1, 3)],
          [theme.breakpoints.down("md")]: {
            padding: [theme.spacing(1, 0)],
          },
        })}>
        <Toolbar gutter={0}>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                onClick={() => setIsOpen(true)}
                sx={{ mr: 1, color: "white" }}>
                <MenuIcon />
              </IconButton>
              <NavbarBrand history={histroy} />
            </>
          ) : (
            <>
              <NavbarBrand history={histroy} />
              <Box
                display="flex"
                color="white"
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
                      sx={(theme) => ({
                        ml: 7,
                        cursor: "pointer",
                        letterSpacing: "1px",
                        "&:hover": {
                          color: [theme.palette.primary.main],
                        },
                        [theme.breakpoints.down("md")]: {
                          ml: 5,
                        },
                      })}
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
    </>
  );
};

export default Header;
