import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { readDocuments } from "../../scripts/firestore";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorFooter from "../../components/InstructorFooter";
import logo from "../../assets/images/logo.png";

export default function InstructorPage() {
  const { courses } = useCourses();
  const navigate = useNavigate();

  const items = courses.map((item) => (
    <div className="course-card" key={item.id} onClick={()=> navigate("/course-page")}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.instructor}</p>
    </div>
  ));
  console.log(courses);

  return (
    <div className="instructor-page">
      <div className="container">
        <img src={logo} alt="novare-logo" />
        {items}
      </div>
      <InstructorFooter />
    </div>
  );
}
