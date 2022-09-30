import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Switch, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = () => {
  const initialValues = {
    user: "",
    password: "",
  };
  const navigate = useNavigate();
  const formSchema = Yup.object().shape({
    // username and email both must be allowed so we can't validate this as email
    user: Yup.string().required("Email/username is required."),
    password: Yup.string()
      .min(8, "Minimum 8 characters required.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Password is required."),
  });
  const handleSubmit = (values) => {
    if (values.user === "aayush" && values.password === "Hello@123") {
      localStorage.setItem("isLoggedIn", true);
      toast.success("Login successful");
      navigate("/home");
      return;
    }

    toast.error("Login failed!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      <div className="container">
        <div className="main">
          <Form noValidate>
            <h1>Login Form</h1>
            <div className="field">
              <label>Username/Email</label>
              <Field
                type="email"
                name="user" // this name prop must also match
                placeholder=" Enter your Username/Email"
              />
              <div style={{ color: "red" }}>
                <ErrorMessage name="user" />
              </div>
            </div>
            <div className="field">
              <label>Password</label>

              <Field
                type="password"
                name="password" // this name property must match with what we have provided in formik initialState and formSchema
                placeholder="Enter your Password"
              />
              <div style={{ color: "red" }}>
                <ErrorMessage name="password" />
              </div>
            </div>
            <button type="submit">Login</button>
            <span>Remember Your Password</span>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default Login;
