import React, { useState } from "react";
import validator from "validator";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if(phoneno.length!==10){
      alert("Phone Number should be of 10 digits");
      return;
    }
    if (pass !== cpass) {
      alert("Passwords do not match");
      return;
    }

    setErrors({});

    console.log(email);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <br></br>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          value={firstname}
          name="fname"
          onChange={(e) => setFirstname(e.target.value)}
          id="fname"
          placeholder="First Name"
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          value={lastname}
          name="lname"
          onChange={(e) => setLastname(e.target.value)}
          id="lname"
          placeholder="Last Name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
        <label htmlFor="phoneno">Phone no.</label>
        <input
          value={phoneno}
          onChange={(e) => setPhoneno(e.target.value)}
          name="phoneno"
          id="phoneno"
          placeholder="Phone no."
        />
        <label htmlFor="password">Create Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
        />
        <label htmlFor="cpass">Confirm Password</label>
        <input
          value={cpass}
          onChange={(e) => setCpass(e.target.value)}
          type="password"
          placeholder="Confirm Password"
          id="cpass"
          name="cpass"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <br></br>
        <button className="submitbutton" type="submit"><b>Submit</b></button>
      </form>
      
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
};