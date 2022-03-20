import React from "react";
import "./from.css";
// local componets
import {
  MarginLine,
  PrimaryHeading,
  PrimaryButton,
} from "../../Reusable/Reusable";
import Spacing from "../../Global/spacing/Sapcing";
//  material UI
import { TextField, Grid, Box, Input } from "@mui/material";
import { alphe, styled } from "@mui/material/styles";

// react router
const StyledTextField = styled(TextField)(({ theme }) => ({
  input: {
    color: theme.palette.info.main,
    borderBottom: "2px solid " + theme.palette.info.main,
    "&:focus": {
      color: "white",
    },
  },
  label: {
    color: theme.palette.info.main,
  },
}));

const Index = () => {
  return (
    <Spacing>
      <MarginLine>
        <PrimaryHeading variant="h3" color="white">
          Want one of our live representative get in touch with you?
        </PrimaryHeading>
        <Grid
          container
          mt={3}
          spacing={4}
          sx={{ backgroundColor: "" }}>
          <Grid item xs={12} md={4}>
            <StyledTextField
              variant="standard"
              fullWidth
              label="First Name"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledTextField
              variant="standard"
              fullWidth
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <StyledTextField
              variant="standard"
              fullWidth
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              label="Contact Number"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <StyledTextField
              variant="standard"
              fullWidth
              label="MC Number"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <PrimaryButton>Send</PrimaryButton>
          </Grid>
        </Grid>
      </MarginLine>
    </Spacing>
  );
};

export default Index;
