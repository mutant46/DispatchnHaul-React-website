import React from "react";
// local Apps
import Spacing from "../../Global/spacing/Sapcing";
import {
  PTypography,
  PrimaryButton,
  PrimaryHeading,
  MarginLine,
} from "../../Reusable/Reusable";
// Material UI
import { Grid, Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
// react router
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Spacing>
      <MarginLine>
        <Grid container spacing={0}>
          <Grid item sm={0} md={1}></Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={(theme) => ({
              alignSelf: "center",
              paddingRight: (theme) => theme.spacing(10),
              [theme.breakpoints.down("lg")]: {
                paddingRight: (theme) => theme.spacing(5),
              },
              [theme.breakpoints.down("md")]: {
                order: 1,
                paddingTop: theme.spacing(5),
                paddingRight: (theme) => theme.spacing(2),
              },
            })}>
            <PrimaryHeading variant="h3">ABOUT US</PrimaryHeading>
            <PTypography component="p">
              We are the leader of the logistics industry, with
              cutting-edge tracking technology for safe pickup and
              delivery and skilled staff to help you make quickly.
            </PTypography>
            <PTypography component="p">
              5000+ carrier database, daily carrier compliance and
              fraud monitoring, as well as quick pay and fuel advance.
            </PTypography>
            <PrimaryButton
              variant="contained"
              onClick={() => {
                history.push("/pricing");
              }}>
              Pricing
            </PrimaryButton>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                order: 0,
              },
            })}>
            <Box
              component="img"
              src={
                isMobile ? "images/about-3.jpg" : "images/about-2.jpg"
              }
              sx={(theme) => ({
                borderRadius: "20px",
                height: "100%",
                width: "100%",
                [theme.breakpoints.down("md")]: {
                  borderRadius: "0",
                },
              })}
            />
          </Grid>
        </Grid>
      </MarginLine>
    </Spacing>
  );
};

export default About;
