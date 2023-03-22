import React from "react";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorFooter from "../../components/InstructorFooter";
import logo from "../../assets/images/logo.png";

export default function InstructorPage() {
  const { courses } = useCourses();
  const navigate = useNavigate();

  const items = courses.map((item) => (
    <div
      className="course-card" key={item.id}
      onClick={() => navigate(`/course-page/${item.id}`)}
    >
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.instructor}</p>
    </div>
    
  ));

  return (
    <div className="instructor-page">
      <div className="container">
        <img src={logo} alt="novare-logo" className="novare-logo" />
        {items}
      </div>
      <InstructorFooter />
    </div>
  );
}
