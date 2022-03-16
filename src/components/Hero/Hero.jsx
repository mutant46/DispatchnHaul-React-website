import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useHistory } from "react-router-dom";
import "./hero.css";
const Hero = () => {
  const history = useHistory();
  return (
    <Box
      display="flex"
      sx={(theme) => ({
        minHeight: "800px",
        backgroundImage: "url('images/bg-1.jpg')",
        backgroundSize: "cover",
        position: "relative",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          backgroundPosition: "center",
        },
      })}>
      <Box
        // background overlay on top of the image
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
        }}></Box>

      <Grid
        container
        // Wrapper for the content
        sx={(theme) => ({
          position: "relative",
          textShadow: "0px 0px 10px #000",
          zIndex: 2,
        })}>
        <Grid item md={1} sx={{ backgroundColor: "" }}></Grid>
        <Grid
          item
          lg={7}
          sx={(theme) => ({
            backgroundColor: "",
            [theme.breakpoints.down("lg")]: {
              padding: [theme.spacing(0, 12)],
            },
            [theme.breakpoints.down("md")]: {
              padding: [theme.spacing(0, 6)],
            },
            [theme.breakpoints.down("sm")]: {
              padding: [theme.spacing(0, 4)],
            },
          })}>
          <Typography
            variant="h6"
            color="primary"
            className="Check"
            sx={(theme) => ({
              fontWeight: "bold",
              letterSpacing: "5px",
              textShadow: "none",
              margin: [theme.spacing(2, 0)],
              padding: [theme.spacing(1, 0)],
              [theme.breakpoints.down("md")]: {
                fontSize: "0.75rem",
              },
            })}>
            DISPATCHNHAUL
          </Typography>
          <Typography
            variant="h3"
            color="white"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "2.5rem",
              },
            })}>
            We are the best company for you dispatch needs
          </Typography>
          <Typography
            variant="h6"
            color="white"
            sx={(theme) => ({
              backgroundColor: "",
              fontWeight: "light",
              width: "72%",
              mt: theme.spacing(2),
              [theme.breakpoints.down("md")]: {
                fontSize: "1rem",
                width: "95%",
              },
            })}>
            With years of experience in trucking and freight industry,
            we have how to make your freight transportation mechanism
            easier.
          </Typography>
          <Typography
            variant="h6"
            color="white"
            onClick={() => history.push("/services")}
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              backgroundColor: "",
              fontWeight: "lighter",
              fontSize: "1.15rem",
              letterSpacing: "1px",
              transition: "letter-spacing 0.3s ease",
              width: "max-content",
              "&:hover": {
                letterSpacing: "2px",
              },
              cursor: "pointer",
              mt: theme.spacing(3),
            })}>
            <Avatar
              className="Avatar"
              sx={(theme) => ({
                backgroundColor: [theme.palette.primary.main],
                width: 50,
                height: 50,
                mr: 1.5,
                [theme.breakpoints.down("lg")]: {
                  width: 45,
                  height: 45,
                },
              })}>
              <ArrowForwardIosIcon
                color="info"
                sx={(theme) => ({
                  [theme.breakpoints.down("lg")]: {
                    width: 20,
                    height: 20,
                  },
                })}
              />
            </Avatar>
            Services
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
