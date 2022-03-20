import React from "react";
// local components
import Spacing from "../../Global/spacing/Sapcing";
import {
  BgHero,
  BgOverlay,
  BgAntiOverlay,
  PTypography,
  PrimaryHeading,
  PrimaryButton,
} from "../../Reusable/Reusable";
// material ui
// react router

const Attract = () => {
  return (
    <BgHero
      sx={(theme) => ({
        backgroundImage: 'url("/images/bg-4.jpg")',
        minHeight: "700px",
        marginTop: theme.spacing(18),
        [theme.breakpoints.down("md")]: {
          marginTop: theme.spacing(6),
        },
      })}>
      <BgOverlay sx={{ opacity: 0.7 }} />
      <Spacing>
        <BgAntiOverlay
          color="white"
          sx={(theme) => ({
            [theme.breakpoints.up("lg")]: {
              padding: theme.spacing(0, 6),
            },
          })}>
          <PrimaryHeading variant="h3">OUR MISSION</PrimaryHeading>
          <PTypography
            sx={(theme) => ({
              fontWeight: "light",
              width: "62%",
              textShadow: "2px 2px 5px black",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            })}>
            The prime objective of DISPATCHNHAUL is to deliver
            high-quality logistics services at reduced costs for
            improved efficiency of the business. <br /> Our carriers
            offer a range of equipment and feature like Dry Vans,
            Flatbeds, Heavy Equipment, and Temperature Controlled
            transportation. What makes us different from other
            logistics companies is the relationship with our carriers.
          </PTypography>
          <PrimaryButton
            sx={{
              backgroundColor: "white",
              color: "black",
            }}>
            Contact
          </PrimaryButton>
        </BgAntiOverlay>
      </Spacing>
    </BgHero>
  );
};

export default Attract;
