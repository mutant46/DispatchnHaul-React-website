import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)(({ theme }) => ({
  input: {
    color: theme.palette.info.main,
    paddingLeft: "5px",
    borderBottom: "2px solid " + theme.palette.info.main,
    "&:focus": {
      color: "white",
    },
  },
  label: {
    color: theme.palette.info.main,
  },
}));

const Index = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configTextField = {
    ...otherProps,
    ...field,
    fullWidth: true,
    variant: "standard",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <StyledTextField {...configTextField} />;
};

export default Index;
