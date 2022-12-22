import React from "react";
// local components
import Spacing from "../spacing/Sapcing";
import Cta from "../Cta/Cta";
import Logo from "../logo/logo";
import { pages } from "../../../Data";
// material ui
import { Box, Typography, Grid, List, ListItem, ListItemText, Divider, Link, Stack } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import useMediaQuery from "@mui/material/useMediaQuery";
// react router
import { useHistory } from "react-router-dom";

// reusable styled components
const StyledListItem = styled(ListItem)(({ theme }) => ({
  width: "max-content",
  color: "#CCD1D1",
  cursor: "pointer",
  marginBottom: "-0.5em",
  paddingLeft: 0,
  "&:hover": {
    textDecoration: "underline",
    color: alpha(theme.palette.primary.main, 0.5),
  },
}));

const StyleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "lighter",
  color: "white",
  letterSpacing: "1px",
}));

const Footer = () => {
  const history = useHistory();
  const isMobile = useMediaQuery("(max-width:600px)");

  const HandlePageClick = (pageURL) => {
    history.push(pageURL);
  };
  return (
    <Box
      sx={(theme) => ({
        borderTop: "1px solid " + alpha(theme.palette.primary.main, 0.8),
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: "black",
        marginTop: (theme) => [theme.spacing(18)],
        paddingTop: (theme) => [theme.spacing(5)],
        [theme.breakpoints.down("sm")]: {
          marginTop: (theme) => [theme.spacing(8)],
        },
      })}
    >
      <Cta />
      <Spacing>
        <Box
          sx={(theme) => ({
            paddingTop: [theme.spacing(7)],
          })}
        >
          <Logo />
          <Grid
            container
            spacing={2}
            sx={{
              padding: (theme) => [theme.spacing(5, 0, 0, 0)],
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <StyleTypography variant="h6">COMPANY</StyleTypography>
              <List dense={true}>
                {pages.map((page) => {
                  const { title, pageURL, id } = page;
                  return (
                    <StyledListItem key={id} onClick={() => HandlePageClick(pageURL)}>
                      <ListItemText primary={title} />
                    </StyledListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid item sm={12} md={8}>
              <StyleTypography variant="h6">CONTACT</StyleTypography>
              <List
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <StyledListItem sx={{ marginBottom: "0em" }}>
                  <MailIcon />
                  <Link
                    href="mailto:dispatchnhaul@gmail.com"
                    ml={1}
                    underline="none"
                    sx={{ letterSpacing: "1px" }}
                    color="inherit"
                  >
                    dispatchnhaul@gmail.com
                  </Link>
                </StyledListItem>
                <StyledListItem
                  sx={(theme) => ({
                    marginBottom: "0",
                    [theme.breakpoints.up("md")]: {
                      marginLeft: [theme.spacing(12)],
                    },
                  })}
                >
                  <LocalPhoneIcon />
                  <Link href="tel:3073171127" ml={1} underline="none" sx={{ letterSpacing: "1px" }} color="inherit">
                    307-317-1127
                  </Link>
                </StyledListItem>
              </List>
            </Grid>
          </Grid>
          <Divider
            color="white"
            sx={(theme) => ({
              marginTop: [theme.spacing(5)],
            })}
          />

          <Grid container sx={{ padding: (theme) => theme.spacing(4, 0) }} spacing={4}>
            <Grid item xs={12} sm={6}>
              <StyleTypography>Copyright © 2022 Dispatch n Haul.</StyleTypography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack direction={isMobile ? "row" : "row-reverse"} spacing={isMobile ? 3 : 4} color="white">
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Spacing>
    </Box>
  );
};

export default Footer;
