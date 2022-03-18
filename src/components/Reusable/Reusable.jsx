import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const PTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.15rem",
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(2),
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  color: "white",
  background: "black",
  marginTop: [theme.spacing(4)],
  padding: [theme.spacing(1.5, 7)],
  "&:hover": {
    background: "",
    backgroundColor: [theme.palette.primary.main],
    color: "white",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: [theme.spacing(3)],
    padding: [theme.spacing(1.25, 5)],
  },
}));

export const PrimaryHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "bolder",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

export const MarginLine = styled(Box)(({ theme }) => ({
  marginTop: [theme.spacing(15)],
  [theme.breakpoints.up("lg")]: {
    padding: [theme.spacing(15, 4)],
  },
  [theme.breakpoints.down("md")]: {
    padding: [theme.spacing(6, 0)],
  },
}));
