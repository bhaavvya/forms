import React, { useState } from "react";
import validator from "validator";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showVerificationMessage, setShowVerificationMessage] = useState(
    false
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log(email);

    setShowVerificationMessage(true);
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <br></br>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
        />
        <br></br>
        <button className="submitbutton" type="submit"><b>Submit</b></button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>

      {showVerificationMessage && (
        <div>
          <p>
            An email has been sent to your inbox. Please check your inbox and
            click on the verification link to confirm your account.
          </p>
          <button className="verifymail"
            onClick={() => {
              alert("Email resend successfully.");
            }}
          >
            Resend Email
          </button>
          <button className="back"
            onClick={() => {
              setShowVerificationMessage(false);
            }}
          >
            Back to Login
          </button>
        </div>
      )}
    </div>
  );
};