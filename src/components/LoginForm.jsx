import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../scripts/auth";
import { useUser } from "../state/UserContextProvider";
import { getUser } from "../scripts/userCollection";
import logo from "../assets/images/logo.svg";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useUser();
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    const result = await login(email, password);

    if (result.status === true) {
      const userDocument = await getUser(email);
      dispatch({ type: "SET_USER", payload: userDocument });

      console.log(userDocument);

      const isInstructor = userDocument.isInstructor;

      if (isInstructor) {
        navigate("/instructor-page");
      } else {
        alert("Logged as User");
      }
    } else {
      alert(`Login has failed, ${result.message}!`);
    }
  }
  return (
    <form className="form-container" onSubmit={(event) => onSubmit(event)}>
      <img src={logo} className="logo-img" alt="novareacademy-logo" />
      <div className="form-inputs">
        <label>
          Email address
          <input
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <button className="submit-btn" type="submit">
        Log in
      </button>
      <Link to="/recoverypassword">
        <button className="links">Forgot your password?</button>
      </Link>
      <Link to="/signup">
        <button className="links">Don't have an account?</button>
      </Link>
    </form>
  );
}
