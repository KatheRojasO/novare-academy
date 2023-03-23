import React from "react";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorNavbar from "../../components/InstructorNavbar.jsx";
import logo from "../../assets/images/logo.png";

export default function InstructorPage() {
  const { courses } = useCourses();
  const navigate = useNavigate();

  const items = courses.map((item) => (
    <div
      className="course-card"
      key={item.id}
      onClick={() => navigate(`/course-page/${item.id}`)}
    >
      <img src={item.image} alt="course-img" />
      <div className="card-text">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Instructor: {item.instructor}</p>
      </div>
    </div>
  ));

  return (
    <div className="instructor-page">
      <div className="logo-container">
        <img src={logo} alt="novare-logo" className="novare-logo" />
      </div>
      <div className="container">{items}</div>
      <InstructorNavbar />
    </div>
  );
}
