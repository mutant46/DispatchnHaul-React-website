import React from "react";
import { Box } from "@mui/material";
const Sapcing = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        padding: [theme.spacing(1, 6)],
        [theme.breakpoints.down("md")]: {
          padding: [theme.spacing(1, 3)],
        },
        [theme.breakpoints.down("sm")]: {
          padding: [theme.spacing(1, 2)],
        },
      })}>
      {children}
    </Box>
  );
};

export default Sapcing;
