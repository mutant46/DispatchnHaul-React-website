import React from "react";
// local components
import {
  MarginLine,
  PTypography,
  PrimaryHeading,
} from "../../Reusable/Reusable";
import Spacing from "../../Global/spacing/Sapcing";

// material ui
import { Grid, Avatar, Link } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { alpha, styled } from "@mui/material/styles";
// react router

// reuseable styles

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "7px",
  backgroundColor: alpha(theme.palette.primary.main, 0.3),
}));

const StyledMailIcon = styled(MailIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "2rem",
}));
const StyledPhoneIcon = styled(LocalPhoneIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "2rem",
}));

const Info = () => {
  return (
    <Spacing>
      <MarginLine>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              color: (theme) => theme.palette.info.main,
            }}
          >
            <PrimaryHeading variant="h3" color="white">
              Get In Touch
            </PrimaryHeading>
            <PTypography component="p" pr={2}>
              With years of experience in trucking and freight industry, we have
              learned how to negotiate the best rates and how to make your
              freight transportation mechanism easier. Furthermore, our
              experienced staff provides driver communication, load
              consolidation, 24/7 customer service and any other assistance
              required.
            </PTypography>
          </Grid>
          <Grid item md={6} />
          <Grid
            item
            xs={12}
            md={4}
            mt={4}
            sx={(theme) => ({
              backgroundColor: theme.palette.info[500],
              padding: (theme) => theme.spacing(4, 4),
              borderRadius: "10px",
            })}
          >
            <StyledAvatar>
              <StyledPhoneIcon />
            </StyledAvatar>
            <PTypography component="p">
              Do you need help right now? Contact our customer service.
            </PTypography>
            <br />
            <Link
              href="tel:3073171127"
              sx={(theme) => ({
                color: theme.palette.primary,
                fontWeight: "bold",
                textShadow: "0.25px 0.25px 0px #05c2c8",
                letterSpacing: 0.75,
              })}
            >
              (307) 317-1127
            </Link>
            <br />
            <Link
              href="tel:7372010071"
              sx={(theme) => ({
                color: theme.palette.primary,
                fontWeight: "bold",
                textShadow: "0.25px 0.25px 0px #05c2c8",
                letterSpacing: 0.75,
              })}
            >
              (737) 201-0071
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            mt={4}
            sx={(theme) => ({
              backgroundColor: theme.palette.info[500],
              padding: theme.spacing(4, 4),
              borderRadius: "10px",
              [theme.breakpoints.up("md")]: {
                marginLeft: 3,
              },
            })}
          >
            <StyledAvatar>
              <StyledMailIcon />
            </StyledAvatar>
            <PTypography component="p">
              Do you have a question? We can help you through our email channel.
            </PTypography>
            <br />
            <Link
              href="mailto:dispatchnhaul@gmail.com"
              color="primary"
              sx={(theme) => ({
                color: theme.palette.primary,
                fontWeight: "bold",
                textShadow: "0.25px 0.25px 0px #05c2c8",
                letterSpacing: 0.75,
              })}
            >
              dispatchnhaul@gmail.com
            </Link>
            <br />
            <Link
              href="mailto:dnh@dispatchnhaul.com"
              color="primary"
              sx={(theme) => ({
                color: theme.palette.primary,
                fontWeight: "bold",
                textShadow: "0.25px 0.25px 0px #05c2c8",
                letterSpacing: 0.75,
              })}
            >
              dnh@dispatchnhaul.com
            </Link>
          </Grid>
        </Grid>
      </MarginLine>
    </Spacing>
  );
};

export default Info;
