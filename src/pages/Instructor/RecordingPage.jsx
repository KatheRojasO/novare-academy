import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorNavbar from "../../components/InstructorNavbar";
import chevron from "../../assets/icons/chevron.svg";
import logo from "../../assets/images/logo.png";
import videoIcon from "../../assets/icons/video.svg";
import trashCan from "../../assets/icons/trashcan.svg";
import editIcon from "../../assets/icons/edit.svg";

export default function RecordingPage() {
  const { courses } = useCourses();
  const navigate = useNavigate();
  const params = useParams();

  const courseInfo = courses.find((course) => course.id === params.id);

  const filteredLinks = courseInfo.recordings.map((recording) => (
    <div className="sections-container">
      <div className="sections">
        <div className="file-name">
          <img src={videoIcon} alt="file-img" />
          <li>{recording}</li>
        </div>
        <div className="links-icons">
          <img src={editIcon} alt="file-img" className="edit-icon" />
          <img src={trashCan} alt="file-img" className="trashcan-icon" />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="links-page">
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
        {filteredLinks}
      </div>
      <InstructorNavbar />
    </div>
  );
}
