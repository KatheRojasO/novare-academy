import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorNavbar from "../../components/InstructorNavbar";
import addIcon from "../../assets/icons/add.svg";
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
    <div className="recording-page">
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
        <div className="add-files-option">
          <img src={addIcon} alt="add-icon" className="add-icon" />
          <p>Add a video</p>
        </div>
        <div className="warning-text">
          <p>
            We strongly recommend to upload your video on Youtube or another
            platform and share only the link!
          </p>
        </div>
        {filteredLinks}
      </div>
      <InstructorNavbar />
    </div>
  );
}
