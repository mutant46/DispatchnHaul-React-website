import React from "react";
// local apps
import {
  BgHero,
  BgOverlay,
  BgAntiOverlay,
} from "../../Reusable/Reusable";
// material ui
import { Typography } from "@mui/material";
// react router
const ContactHero = () => {
  return (
    <BgHero
      display="flex"
      sx={(theme) => ({
        backgroundImage: "url('images/contact-bg.jpg')",
        backgroundAttachment: "fixed",
      })}>
      <BgOverlay />
      <BgAntiOverlay sx={{ textAlign: "center" }}>
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
          CONTACT US
        </Typography>
      </BgAntiOverlay>
    </BgHero>
  );
};

export default ContactHero;
