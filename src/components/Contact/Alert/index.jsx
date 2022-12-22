import React from "react";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const Index = ({ status, onIconClick }) => {
  return (
    <Alert
      icon={status ? <CheckIcon fontSize="inherit" /> : <CloseIcon fontSize="inherit" onClick={onIconClick} />}
      severity={status ? "success" : "error"}
      sx={(theme) => ({
        color: status ? "green" : "red",
        backgroundColor: (theme) => theme.palette.info[500],
        [theme.breakpoints.up("md")]: {
          width: "50%",
        },
      })}
    >
      {status ? "Your message was sent successfully!" : "Error sending email, please try again."}
    </Alert>
  );
};

export default Index;
