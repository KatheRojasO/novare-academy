import React from "react";
import SignupForm from "../components/Forms/SignupForm";

// Function length -1
// If the only purpose of sigunup page is to load the form, then put the whole form code here.
export default function SignUp() {
  return (
    <div className="signup">
      <div className="container">
        <SignupForm />
      </div>
    </div>
  );
}
