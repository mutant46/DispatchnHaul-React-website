import React from "react";
// local components
import Spacing from "../spacing/Sapcing";
import Logo from "../logo/logo";
// material ui
import { Box, Typography, Grid, Button } from "@mui/material";
import { alpha } from "@mui/material/styles";

// react router
import { useHistory } from "react-router-dom";
const Cta = () => {
  const history = useHistory();
  return (
    <Spacing>
      <Box
        sx={(theme) => ({
          backgroundImage: [`url('images/contact-1.jpg')`],
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: [theme.spacing(10, 5)],
          position: "relative",
          borderRadius: "12px",
          [theme.breakpoints.down("sm")]: {
            padding: [theme.spacing(6, 2)],
          },
        })}>
        <Box
          // overlay
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            top: 0,
            left: 0,
            borderRadius: "12px",
            backgroundColor: (theme) =>
              alpha(theme.palette.secondary.main, 0.15),
          }}></Box>
        <Grid
          container
          spacing={2}
          sx={{ position: "relative", zIndex: 2, color: "black" }}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={(theme) => ({
                fontWeight: "bold",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1.5rem",
                },
              })}>
              GET IN TOUCH
            </Typography>
          </Grid>
          <Grid item sm={12} md={8} lg={6}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "light",
              }}>
              Do you have a question? We can help you through our
              email channel.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => {
                history.push("/contact");
              }}
              sx={(theme) => ({
                color: "white",
                background: "black",
                padding: (theme) => [theme.spacing(1.5, 7)],
                "&:hover": {
                  background: "black",
                  color: "gray",
                },
                [theme.breakpoints.down("sm")]: {
                  padding: (theme) => [theme.spacing(1, 3)],
                },
              })}>
              Contact us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Spacing>
  );
};

export default Cta;
