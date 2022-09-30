import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import Layout from "../components/Layout";
const Signup = () => {
  const paperStyle = { padding: 100, width: 350, margin: "100 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 0 };
  const marginBottom = { marginBottom: 100 };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    toast.success("Updated");
    console.log(false);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <Layout>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>New Employee </h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form !
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  helperText={
                    <div style={{ color: "red" }}>
                      <ErrorMessage name="name" className="help-block errors" />
                    </div>
                  }
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  helperText={
                    <div style={{ color: "red" }}>
                      <ErrorMessage name="email" />
                    </div>
                  }
                />
                <FormControl component="fieldset" style={marginTop}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <Field
                    as={RadioGroup}
                    aria-label="gender"
                    name="gender"
                    name="gender"
                    style={{ display: "initial" }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </Field>
                </FormControl>
                <FormHelperText>
                  <ErrorMessage name="gender" />
                </FormHelperText>
                <Field
                  as={TextField}
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  helperText={
                    <div style={{ color: "red" }}>
                      <ErrorMessage name="phoneNumber" />
                    </div>
                  }
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  helperText={
                    <div style={{ color: "red" }}>
                      <ErrorMessage name="password" />
                    </div>
                  }
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  helperText={
                    <div style={{ color: "red" }}>
                      <ErrorMessage name="confirmPassword" />
                    </div>
                  }
                />
                <FormControlLabel
                  control={<Field as={Checkbox} name="termsAndConditions" />}
                  label="I accept the terms and conditions."
                />
                <FormHelperText>
                  <div style={{ color: "red" }}>
                    <ErrorMessage name="termsAndConditions" />
                  </div>
                </FormHelperText>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  color="primary"
                >
                  {props.isSubmitting ? "Loading" : "Submit"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Layout>
  );
};

export default Signup;
