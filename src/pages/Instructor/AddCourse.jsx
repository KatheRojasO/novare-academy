import React from "react";
import InstructorNavbar from "../../components/InstructorNavbar";
import AddCourseForm from "../../components/AddCourseForm";
import logo from "../../assets/images/logo.png";

export default function AddCourse() {
  

  return (
    <div className="add-course">
      <div className="container">
        <img src={logo} alt="novare-logo" />
        <AddCourseForm/>
      </div>
      <InstructorNavbar/>
    </div>
  );
}
