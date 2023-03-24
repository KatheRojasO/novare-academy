import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { recoverAccount } from "../../scripts/auth";
import logo from "../../assets/images/logo.svg";

export default function RecoveryPassword() {
  const [email, setEmail] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    const result = await recoverAccount(email);

    if (result.status === true) {
      setFormSubmit(true);
    } else {
      alert(`Cannot recover account, ${result.message}!`);
    }
  }

  return (
    <div className="recovery-form">
      <form className="form-container" onSubmit={(event) => onSubmit(event)}>
        <img src={logo} className="logo-img" alt="novareacademy-logo" />
        {formSubmit &&
          "We have sent you a link to recover your account. Please check your spam folder!"}
        <div className="form-inputs">
          <label>
            Email address
            <input
              type="email"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <button className="submit-btn" type="submit">
          Recover password
        </button>
      </form>
      <button className="links" type="submit" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}
