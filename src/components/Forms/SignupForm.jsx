import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../scripts/auth";
import logo from "../../assets/images/logo.svg";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    const result = await createAccount(email, password);

    if (result.status === true) {
      alert("Logged as User");
    } else {
      alert(`Cannot creat account, ${result.message}!`);
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
        Register
      </button>
    </form>
  );
}
