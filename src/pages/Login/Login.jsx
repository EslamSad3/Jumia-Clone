import React, { useState } from 'react';
import "./Login.css"
import logotop from "../../assets/imgs/validation/myjumia-top-logo.png";
import logobottom from "../../assets/imgs/validation/myjumia-bottom-logo.png";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    });

const ShowPasswordButton = ({ showPassword, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      color: "#757575",
      fontSize: "19px",
      position: "absolute",
      right: "10px",
      top: "calc(50% - 22px)",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
    }}
  >
    {showPassword ? (
      <i className="fas fa-eye-slash"></i>
    ) : (
      <i className="fas fa-eye"></i>
    )}
  </button>
);

const FormHeader = () => (
  <div className="text-center">
    <img
      src={logotop}
      className="mt-1 mb-3 pb-1"
      style={{ width: "64px" }}
      alt="logo"
    />
    <h4
      className="mt-1 mb-1 pb-1 fw-bold"
      style={{ 
        color: "#4a4a4a", 
        fontSize: "20px",
         fontWeight: "500",
         }}
    >
      Welcome back!
    </h4>
    <p
      className="mt-1 mb-5 pb-1"
      style={{
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "1.5em",
        margin: "8px 0 16px",
      }}
    >
      Log back into your Jumia account.
    </p>
  </div>
);

const EmailInput = ({errors, touched }) => (
  <div
    className="input-group mb-4"
    style={{
      display: "flex",
      flexDirection: "column",
      height: "72px", // Fixed height
    }}
  >
    <Field name="email">
      {({ field }) => (
        <MDBInput
          wrapperClass="mb-1"
          label="Email address"
          labelClass="mt-1"
          id="form1"
          type="email"
          size="lg"
          style={{ height: "56px", boxSizing: "border-box" }}
          className={errors.email && touched.email ? "is-invalid" : ""}
          {...field}
        />
      )}
    </Field>
    <ErrorMessage name="email">
      {(msg) => (
        <div
          className="text-danger text-center"
          style={{
            fontSize: "12px",
            fontWeight: "400",
            letterSpacing: "0.4px",
          }}
        >
          {msg}
        </div>
      )}
    </ErrorMessage>
  </div>
)


const PasswordInput = ({errors, touched, showPassword, setShowPassword }) => {
  return (
    <div
      className="input-group mb-5"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "72px",
      }}
    >
      <Field name="password">
        {({ field }) => (
          <>
            <MDBInput
              label="Password*"
              labelClass="mt-1"
              id="form2"
              // type="password"
              type={showPassword ? "text" : "password"}
              size="lg"
              style={{ height: "56px", boxSizing: "border-box" }}
              {...field}
              className={
                errors.password && touched.password ? "is-invalid" : ""
              }
            />
            <ShowPasswordButton
              showPassword={showPassword}
              onClick={() => setShowPassword(!showPassword)}
            />
          </>
        )}
      </Field>
        <ErrorMessage name="password">
        {(msg) => (
          <div
            className="text-danger text-center mt-1"
            style={{
              fontSize: "12px",
              fontWeight: "400",
              letterSpacing: "0.4px",
            }}
          >
            {msg}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
};


const LoginButton = () => {
return (
  <>
    <MDBBtn
      className="mb-4 w-100 fw-bolder"
      style={{ backgroundColor: "#f8972d" }}
      size="lg"
    >
      Login
    </MDBBtn>
    <div className="text-center">
      <a href="#!" className="mb-5 fw-bold" style={{ color: "#f8972d" }}>
        Forgot your password?
      </a>
    </div>
  </>
);
};

const FormFooter = () => (
  <div
    className="text-center mt-5"
    style={{
      fontSize: "14px",
      lineHeight: "24px",
      padding: " 0 24px",
      position: "relative",
      textAlign: "center",
    }}
  >
    <p>
      For further support, you may visit the Help Center or contact our customer
      service team.
    </p>

    <img
      src={logobottom}
      className="mt-3"
      style={{ width: "100px" }}
      alt="logo"
    />
  </div>
);
function Login({saveUserData}) {

const [showPassword, setShowPassword] = useState(false);
const navigate =useNavigate()
async function handleLogin(values, {setFieldError}) {
       try {
   const response = await axios.post('https://jumia-clone-api-9qqm.onrender.com/api/team2/auth/login', values);
      
   if (response.status === 200) {
     localStorage.setItem('UserToken', response.data.token)
    //  console.log(localStorage.getItem('userToken', response.data.token)); 
            saveUserData()
             navigate('/');
   }
     } catch (error) {
        if (error.response.status === 401) {
       setFieldError("email", "Incorrect email or password");
       setFieldError("password", "Incorrect email or password");
      }
  //  console.log(JSON.stringify(error.response.data, null, 2));
 }
}
return (
 <MDBContainer
 className="p-3 my-5 d-flex flex-column"
 style={{ width: "432px" }}
>
 <Formik
 // email: email
 initialValues={{ email:"" , password: '' }}
 validationSchema={validationSchema}
 onSubmit={handleLogin}>
  {({ errors, touched }) =>(
   <Form>
   <FormHeader />
   <EmailInput errors={errors} touched={touched} />
   <PasswordInput errors={errors} touched={touched} showPassword={showPassword} setShowPassword={setShowPassword} />
   <LoginButton/>
   <FormFooter />
   </Form>
  )}
 </Formik>
 </MDBContainer>
);
}

export default Login;
