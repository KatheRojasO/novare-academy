import React from "react";
import InstructorNavbar from "../../components/InstructorNavbar";
import AddCourseForm from "../../components/Forms/AddCourseForm";
import logo from "../../assets/images/logo.png";

export default function AddCourse() {
  return (
    <div className="add-course">
      <div className="logo-container">
        <img src={logo} alt="novare-logo" className="novare-logo" />
      </div>
      <div className="container">
        <AddCourseForm />
      </div>
      <InstructorNavbar />
    </div>
  );
}
