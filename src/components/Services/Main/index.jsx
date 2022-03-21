import React from "react";
// local components
import Spacing from "../../Global/spacing/Sapcing";
import {
  BgHero,
  BgAntiOverlay,
  BgOverlay,
  MarginLine,
  PTypography,
  PrimaryHeading,
  PrimaryButton,
} from "../../Reusable/Reusable";
import { services } from "../../../Data";
// material ui
import { Box, Grid, Typography, Avatar } from "@mui/material";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { alpha } from "@mui/material";

// react router

import { useHistory } from "react-router-dom";

const Index = () => {
  const history = useHistory();
  return (
    <>
      <BgHero
        display="flex"
        sx={(theme) => ({
          backgroundImage: "url('images/service-1.jpg')",
          backgroundAttachment: "fixed",
        })}>
        <BgOverlay />
        <BgAntiOverlay
          sx={{
            textAlign: "center",
            textShadow: "1px 1px 5px black",
          }}>
          <Typography
            color="white"
            variant="h2"
            compoenent="h3"
            sx={(theme) => ({
              fontWeight: "bold",
              letterSpacing: "1px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "2.5rem",
              },
            })}>
            OUR SERVICES
          </Typography>
          <Typography color="white" variant="body" letterSpacing={1}>
            Dispatch Services You Can Rely On
          </Typography>
        </BgAntiOverlay>
      </BgHero>
      <Spacing>
        <MarginLine>
          <Grid container spacing={4}>
            <Grid
              item
              sm={12}
              md={6}
              sx={(theme) => ({
                color: theme.palette.info.main,
                alignSelf: "center",
                paddingRight: (theme) => theme.spacing(8),
                [theme.breakpoints.down("lg")]: {
                  paddingRight: (theme) => theme.spacing(5),
                },
                [theme.breakpoints.down("md")]: {
                  order: 0,
                  paddingTop: theme.spacing(5),
                  paddingRight: (theme) => theme.spacing(2),
                },
              })}>
              <PrimaryHeading
                variant="h3"
                component="h1"
                color="white">
                Truck Dispatch Services
              </PrimaryHeading>
              <PTypography component="p">
                We provide a Professional Truck Dispatch service that
                handles all back-office paperwork, detention
                collection, factoring, invoicing, and all other admin
                tasks. We discover the most active loads required for
                your freight wants.
              </PTypography>
              <PTypography component="p">
                we offer the finest possible freight rate for any
                truckload you may have and assure that no problems may
                arise while driving.
              </PTypography>
              <PrimaryButton
                variant="contained"
                onClick={() => {
                  history.push("/pricing");
                }}>
                Pricing
              </PrimaryButton>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/bg-1.jpg"
                alt="Truck Dispatch Services"
                sx={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </MarginLine>
      </Spacing>
      <Spacing>
        <MarginLine>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: {
                  textAlign: "center",
                },
              })}>
              <PrimaryHeading variant="h3" mb={4} color="white">
                Other Services
              </PrimaryHeading>
            </Grid>
            {services.map((service, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={(theme) => ({
                    color: theme.palette.info.main,
                    display: "flex",
                    alignItems: "center",
                    marginTop: theme.spacing(2),
                    [theme.breakpoints.up("md")]: {
                      marginTop: theme.spacing(4),
                    },
                  })}>
                  <Avatar
                    sx={(theme) => ({
                      width: "50px",
                      height: "50px",
                      backgroundColor: alpha(
                        theme.palette.primary.main,
                        0.3
                      ),
                      [theme.breakpoints.down("sm")]: {
                        width: "35px",
                        height: "35px",
                      },
                    })}>
                    <MiscellaneousServicesIcon
                      color="primary"
                      sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: {
                          fontSize: "15px",
                        },
                      })}
                    />
                  </Avatar>
                  <Typography variant="" ml={2}>
                    {service}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </MarginLine>
      </Spacing>
    </>
  );
};

export default Index;
