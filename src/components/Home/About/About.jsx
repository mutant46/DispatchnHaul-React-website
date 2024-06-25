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
import { Grid, Box } from "@mui/material";
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
              color: theme.palette.info.main,
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
            })}
          >
            <PrimaryHeading variant="h3" color="white">
              ABOUT US
            </PrimaryHeading>
            <PTypography component="p">
              Dispatch n Haul Services was founded in 2020 and the aim was to
              support the Trucking industry and help empower the industry that
              is running the economy.
            </PTypography>
            <PTypography component="p">
              At Dispatch n Haul Services, we're passionate about helping
              owner-operators and Fleet Managers to maximize their earning
              potential and simplify their business operations. We are your
              one-stop shop for premium US and Canada truck dispatch services,
              designed to keep you on the road and focused on what you do best –
              driving
            </PTypography>
            <PrimaryButton
              variant="contained"
              onClick={() => {
                history.push("/pricing");
              }}
            >
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
            })}
          >
            <Box
              component="img"
              alt="about truck dispatch"
              src={isMobile ? "images/about-3.jpg" : "images/about-2.jpg"}
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
