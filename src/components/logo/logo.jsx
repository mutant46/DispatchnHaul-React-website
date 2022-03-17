import React from "react";
import { Typography, Box } from "@mui/material";

const NavbarBrand = ({ history }) => {
  return (
    <>
      <Box
        display="flex"
        sx={{
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => history.push("/")}>
        <Box
          component="img"
          width="45px"
          alt="DispathnHaul logo"
          src="logo.svg"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              width: "35px",
            },
          })}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{
            ml: 1,
            // fontFamily: "Russo One",
            cursor: "pointer",
            letterSpacing: "1.5px",
            color: "white",
          }}>
          DISPATCHNHAUL
        </Typography>
      </Box>
    </>
  );
};

export default NavbarBrand;
