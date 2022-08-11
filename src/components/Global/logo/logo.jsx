import React from "react";
import { Box } from "@mui/material";

const NavbarBrand = ({ history }) => {
  return (
    <>
      <Box
        display="flex"
        sx={{
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => history.push("/")}
      >
        <Box
          component="img"
          width="250px"
          alt="DispathnHaul logo"
          src="images/logo.png"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              width: "180px",
            },
          })}
        />
      </Box>
    </>
  );
};

export default NavbarBrand;
