import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
// local componets
import {
  MarginLine,
  PrimaryHeading,
  PrimaryButton,
  PTypography,
} from "../../Reusable/Reusable";
import Alert from "../Alert";
import CustomTextFiled from "../TextField";
import Spacing from "../../Global/spacing/Sapcing";
//  material UI
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

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
    .typeError("Please enter a valid MC number."),
});

const Index = () => {
  const [status, setStatus] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [parentSize, setParentSize] = useState(0);
  const parentRef = useRef(null);

  useEffect(() => {
    const { clientHeight, clientWidth } = parentRef.current;
    setParentSize(Math.min(clientHeight, clientWidth));
  }, []);

  const onIconClick = () => {
    setShowAlert((prev) => !prev);
  };
  return (
    <Spacing>
      <MarginLine>
        <PrimaryHeading variant="h3" color="white">
          Want one of our live representative get in touch with you?
        </PrimaryHeading>
        <PTypography
          component="p"
          sx={(theme) => ({
            color: "gray",
            width: "50%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          })}
        >
          By providing a telephone number and submitting this form you are
          consenting to be contacted by SMS text message. Message & data rates
          may apply. You can reply STOP to opt-out of further messaging.
        </PTypography>
        <br />
        <PTypography
          component="p"
          sx={(theme) => ({
            color: "gray",
            fontWeight: "bold",
            width: "50%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          })}
        >
          The phone numbers we collect and the consent we receive will not be
          shared with 3rd party providers.
        </PTypography>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION_SCHEMA}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(async () => {
              try {
                await axios
                  .post("/.netlify/functions/sendMail", JSON.stringify(values))
                  .then((response) => {
                    if (response.status === 200) {
                      setStatus(true);
                      resetForm();
                    }
                  });
              } catch (error) {
                setStatus(false);
                console.log(error);
              } finally {
                setShowAlert(true);
                setSubmitting(false);
              }
            }, 400);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <Grid container mt={3} spacing={4}>
                <Grid item xs={12}>
                  {showAlert ? (
                    <Alert status={status} onIconClick={onIconClick} />
                  ) : null}
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomTextFiled name="firstName" label="First Name" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomTextFiled name="lastName" label="Last Name" />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CustomTextFiled
                    name="contactNumber"
                    label="Contact Number"
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CustomTextFiled name="mcNumber" label="MC Number" />
                </Grid>
                <Grid item xs={12} md={12}>
                  <PrimaryButton
                    ref={parentRef}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {!isSubmitting ? (
                      "Send"
                    ) : (
                      <CircularProgress size={0.5 * parentSize} />
                    )}
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
