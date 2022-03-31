import React from "react";
// local components
import { PrimaryButton } from "../../Reusable/Reusable";
import Spacing from "../../Global/spacing/Sapcing";
// materail-ui components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// react router
import { useHistory } from "react-router-dom";
const Index = () => {
  const history = useHistory();
  return (
    <Spacing>
      s
      <Box
        sx={(theme) => ({
          width: "70%",
          mx: "auto",
          [theme.breakpoints.up("md")]: {
            width: "50%",
          },
        })}>
        <Box
          display="block"
          component="img"
          src="images/error-1.png"
          sx={{ pt: 3, pb: 1, width: "100%", height: "auto" }}
        />
      </Box>
      <Typography
        variant="h5"
        component="p"
        color="white"
        sx={{ textAlign: "center", fontWeight: "light", fontFamily: "Abel" }}>
        Whoooops! Page Not Found!!!!
      </Typography>
      <PrimaryButton
        sx={{ display: "block", mx: "auto", mt: 2 }}
        onClick={() => history.push("/")}>
        Home
      </PrimaryButton>
    </Spacing>
  );
};

export default Index;
