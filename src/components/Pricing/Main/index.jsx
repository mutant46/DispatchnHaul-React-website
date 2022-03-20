import React from "react";
// local components
import Spacing from "../../Global/spacing/Sapcing";
import { plans } from "../../../Data";
import {
  BgHero,
  BgOverlay,
  BgAntiOverlay,
  MarginLine,
  PTypography,
  PrimaryButton,
  PrimaryHeading,
  StyledChip,
} from "../../Reusable/Reusable";
// materail UI
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// react router
import { useHistory } from "react-router-dom";

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  margin: "auto",
  textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "white",
  boxShadow: "1px 1px 10px rgba(0,0,0,0.4)",
  padding: "30px",
  borderRadius: "10px",
}));

const Index = () => {
  const history = useHistory();
  return (
    <>
      <BgHero
        display="flex"
        sx={(theme) => ({
          backgroundImage: "url('images/pricing-1.jpeg')",
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
            sx={(theme) => ({
              fontWeight: "bold",
              letterSpacing: "1px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "2.5rem",
              },
            })}>
            OUR PACKAGES
          </Typography>
          <Typography color="white" variant="body" letterSpacing={1}>
            That make you worth hauling
          </Typography>
        </BgAntiOverlay>
      </BgHero>
      <Spacing>
        <MarginLine>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <PrimaryHeading variant="h3">
                Truck Dispatch Services Pricing
              </PrimaryHeading>
              <PTypography component="p" pr={2}>
                There are no agreements in place. We understand how
                tough it is to make money, which is why we only charge
                a small percentage fee for any load we locate. This is
                the industry's lowest service fee.
              </PTypography>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={4} mt={2}>
              <StyledBox
                sx={{
                  backgroundColor: "black",
                  color: "white",
                }}>
                <StyledTitle variant="h5">Custom</StyledTitle>
                <br />
                <Typography variant="h5" sx={{}} mb={3}>
                  Describe your own custom plan for partial services
                </Typography>
                <Button
                  color="info"
                  onClick={() => history.push("/contact")}
                  sx={{
                    border: "0px",
                    backgroundColor: (theme) =>
                      theme.palette.primary.main,
                    borderRadius: "20px",
                    "&:hover": {
                      border: "0px",
                      backgroundColor: (theme) =>
                        theme.palette.info.main,
                      color: "black",
                    },

                    padding: (theme) => theme.spacing(1, 5),
                  }}
                  variant="outlined">
                  Contact
                </Button>
              </StyledBox>
            </Grid>
            {plans.map((plan, index) => {
              const { title, points, price, papular } = plan;
              return (
                <Grid item xs={12} sm={6} md={4} mt={2} key={index}>
                  <StyledBox>
                    {papular ? (
                      <StyledChip
                        label="Recommended"
                        sx={{
                          backgroundColor: (theme) =>
                            theme.palette.primary.main,
                          color: "white",
                        }}
                      />
                    ) : (
                      ""
                    )}
                    <StyledTitle variant="h5">{title}</StyledTitle>
                    <br />
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bolder",
                        textShadow: "1px 1px 5px rgba(0,0,0,0.4)",
                      }}>
                      ${price}{" "}
                      <span
                        style={{
                          fontSize: "12px",
                        }}>
                        per truck
                      </span>
                    </Typography>
                    <List
                      sx={{
                        padding: "30px 0px",
                      }}>
                      {points.map((point, index) => {
                        return (
                          <ListItem
                            key={index}
                            sx={{
                              padding: "2px 0px",
                            }}>
                            <CheckCircleIcon
                              color="primary"
                              sx={{ marginRight: "10px" }}
                            />
                            <ListItemText disableTypography={true}>
                              <Typography>{point}</Typography>
                            </ListItemText>
                          </ListItem>
                        );
                      })}
                    </List>
                    <Button
                      color="info"
                      onClick={() => history.push("/contact")}
                      sx={{
                        backgroundColor: "black",
                        borderRadius: "20px",
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.primary.main,
                        },

                        padding: (theme) => theme.spacing(1, 5),
                      }}
                      variant="outlined">
                      Contact
                    </Button>
                  </StyledBox>
                </Grid>
              );
            })}
          </Grid>
        </MarginLine>
      </Spacing>
      <Spacing>
        <MarginLine>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/pricing-2.jpg"
                sx={{ width: "100%", height: "auto" }}
              />
            </Grid>
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
                  paddingRight: (theme) => theme.spacing(2),
                },
              })}>
              <PrimaryHeading variant="h3">
                We Do All The Heavy Lifting
              </PrimaryHeading>
              <PTypography component="p">
                <b>DISPATCHNHAUL</b> is a  dispatching company that
                takes care of all the back-office tasks so you can
                compete with the big fleets. Normally, a large carrier
                would engage someone to undertake all of these
                activities, but for a small carrier, this is
                prohibitive. That's when <b>DISPATCHNHAUL</b> comes in
                to help!
              </PTypography>
              <PTypography component="p">
                Our procedure is straightforward; your professional
                truck dispatcher will follow your instructions. Our
                freight dispatchers work with you to build the ideal
                lanes that meet your chosen schedule, whether you want
                to be home every night, every other night, or once
                every two weeks.
              </PTypography>
              <PrimaryButton
                variant="contained"
                onClick={() => {
                  history.push("/contact");
                }}>
                Contact
              </PrimaryButton>
            </Grid>
          </Grid>
        </MarginLine>
      </Spacing>
    </>
  );
};

export default Index;
