import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorFooter from "../../components/InstructorFooter";
import chevron from "../../assets/icons/chevron.svg";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/icons/user.svg";
import trashCan from "../../assets/icons/trashcan.svg";


export default function StudentPageList() {
  const { courses } = useCourses();
  const navigate = useNavigate();
  const params = useParams();

  const courseInfo = courses.find((course) => course.id === params.id);

  const filteredStudents = courseInfo.students.map((student) => (
    <div className="sections-container">
      <div className="sections">
        <div className="file-name">
          <img src={userIcon} alt="file-img" />
          <li>{student}</li>
        </div>
        <img src={trashCan} alt="file-img" className="trashcan-icon" />
      </div>
    </div>
  ));

  return (
    <div className="studentlist-page">
      <div className="container">
        <div className="logo-container">
          <img
            src={chevron}
            alt="goback-icon"
            className="goback-icon"
            onClick={() => navigate(-1)}
          />
          <img src={logo} alt="novareacademy-logo" className="novare-logo" />
        </div>
        {filteredStudents}
      </div>
      <InstructorFooter />
    </div>
  );
}