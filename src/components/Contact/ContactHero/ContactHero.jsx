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
        backgroundImage: "url('images/contact-2.jpg')",
        backgroundAttachment: "fixed",
      })}>
      <BgOverlay />
      <BgAntiOverlay
        sx={{ textAlign: "center", textShadow: "1px 1px 5px black" }}>
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
