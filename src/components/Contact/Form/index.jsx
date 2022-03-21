import * as React from "react";
// local componets
import {
  MarginLine,
  PrimaryHeading,
  PrimaryButton,
} from "../../Reusable/Reusable";
import CustomTextFiled from "../TextField";
import Spacing from "../../Global/spacing/Sapcing";
//  material UI
import { Grid, Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

// formil forms and yup
import { Formik, Form } from "formik";
import * as Yup from "yup";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  mcNumber: "",
};

const FORM_VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required("Required."),
  lastName: Yup.string().required("Required."),
  contactNumber: Yup.number()
    .required("Required.")
    .integer()
    .typeError("Invalid contact number."),
  mcNumber: Yup.number()
    .required("Required.")
    .integer()
    .typeError("Please enter a valid phone number."),
});

const Index = () => {
  const [status, setStatus] = React.useState(false);
  return (
    <Spacing>
      <MarginLine>
        <PrimaryHeading variant="h3" color="white">
          Want one of our live representative get in touch with you?
        </PrimaryHeading>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION_SCHEMA}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              setSubmitting(false);
              setStatus(true);
              resetForm();
            }, 400);
          }}>
          {({ isSubmitting, values }) => (
            <Form>
              <Grid container mt={3} spacing={4}>
                <Grid item xs={12}>
                  {status ? (
                    <Alert
                      icon={<CheckIcon fontSize="inherit" />}
                      severity="success"
                      sx={{
                        color: "green",
                        backgroundColor: (theme) =>
                          theme.palette.info[500],
                        width: "50%",
                      }}>
                      The form has been sent. We will get back to you
                      shortly.
                    </Alert>
                  ) : null}
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomTextFiled
                    name="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomTextFiled
                    name="lastName"
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CustomTextFiled
                    name="contactNumber"
                    label="Contact Number"
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CustomTextFiled
                    name="mcNumber"
                    label="MC Number"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <PrimaryButton
                    type="submit"
                    disabled={isSubmitting}>
                    Send
                  </PrimaryButton>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </MarginLine>
    </Spacing>
  );
};

export default Index;
