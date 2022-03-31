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
  StyledSpan,
} from "../../Reusable/Reusable";
// material ui
// react router
import { useHistory } from "react-router-dom";
const Attract = () => {
  const history = useHistory();
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
      <BgOverlay sx={{ opacity: 0.8 }} />
      <Spacing>
        <BgAntiOverlay
          sx={(theme) => ({
            color: theme.palette.info.main,
            [theme.breakpoints.up("lg")]: {
              padding: theme.spacing(0, 6),
            },
          })}>
          <PrimaryHeading variant="h3" color="white">
            OUR MISSION
          </PrimaryHeading>
          <PTypography
            sx={(theme) => ({
              fontWeight: "light",
              width: "60%",
              textShadow: "2px 2px 5px black",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            })}>
            The prime objective of{" "}
            <StyledSpan variant="body">Dispatch n Haul</StyledSpan> is to deliver
            high-quality logistics services at reduced costs for improved efficiency
            of the business. <br />
            <br /> Our carriers offer a range of equipment and features like Dry
            Vans, Flatbeds, Good paying loads Dispatcher, Heavy Equipment, and
            Temperature Controlled transportation. What makes us different from other
            logistics companies is the relationship with our carriers.
          </PTypography>
          <PrimaryButton
            onClick={() => history.push("/contact")}
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
