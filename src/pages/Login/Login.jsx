import React, { useState } from 'react';
import "./Login.css"
import logotop from "../../assets/imgs/validation/myjumia-top-logo.png";
import logobottom from "../../assets/imgs/validation/myjumia-bottom-logo.png";

import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";

const ShowPasswordButton = ({ showPassword, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      color: "#757575",
      fontSize: "19px",
      position: "absolute",
      right: "10px",
      top: "calc(50% - 16px)",
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

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <MDBInput
        wrapperClass="mb-1"
        className="mb-4"
        label="Email address"
        labelClass="mt-1"
        id="form1"
        type="email"
        size="lg"
        style={{ height: "56px", boxSizing: "border-box" }}
      />
      <div style={{ position: 'relative' }}>
        <MDBInput
          wrapperClass="mb-1"
          className="mb-4"
          label="Password"
          labelClass="mt-1"
          id="form2"
          type={showPassword ? "text" : "password"}
          size="lg"
          style={{ height: "56px", boxSizing: "border-box" }}

        />
        <ShowPasswordButton
          showPassword={showPassword}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <MDBBtn
        className="mb-4 w-100 fw-bolder"
        style={{ backgroundColor: "#f8972d" }}
        size="lg"
      >
        Login
      </MDBBtn>
      <div className="text-center">
        <a href="!#" className="mb-5 fw-bold" style={{ color: "#f8972d" }}>
          Forgot your password?
        </a>
      </div>
    </div>
  );
}
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

function Login() {
  return (
    <MDBContainer
      className="p-3 my-5 d-flex flex-column"
      style={{ width: "432px" }}
    >
      <FormHeader />
      <Form />
      <FormFooter />
    </MDBContainer>
  );
}

export default Login;
