import React from "react";
// local components
import { PTypography } from "../../Reusable/Reusable";
import { Box, Typography } from "@mui/material";
// material ui

const Item = ({ icon, title, desc }) => {
  return (
    <Box
      sx={(theme) => ({
        paddingTop: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
          paddingTop: theme.spacing(5),
        },
      })}>
      <Box
        display="flex"
        sx={(theme) => ({
          alignItems: "center",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        })}>
        <Box
          display="flex"
          sx={(theme) => ({
            width: 55,
            height: 55,
            borderRadius: "8px",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.primary.main,
            [theme.breakpoints.down("sm")]: {
              borderRadius: "50%",
              flexDirection: "column",
            },
          })}>
          {icon}
        </Box>
        <Typography
          variant="h6"
          sx={(theme) => ({
            fontWeight: "bold",
            [theme.breakpoints.up("sm")]: {
              marginLeft: theme.spacing(2),
            },
            [theme.breakpoints.down("sm")]: {
              marginTop: theme.spacing(2),
            },
          })}>
          {title}
        </Typography>
      </Box>
      <PTypography
        component="p"
        sx={(theme) => ({
          paddingRight: theme.spacing(5),
          [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(0, 1),
            textAlign: "center",
          },
        })}>
        {desc}
      </PTypography>
    </Box>
  );
};

export default Item;
