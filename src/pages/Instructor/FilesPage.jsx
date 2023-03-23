import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorNavbar from "../../components/InstructorNavbar";
import chevron from "../../assets/icons/chevron.svg";
import addIcon from "../../assets/icons/add.svg";
import logo from "../../assets/images/logo.png";
import fileIcon from "../../assets/icons/file.svg";
import trashCan from "../../assets/icons/trashcan.svg";

export default function FilesPage() {
  const { courses } = useCourses();
  const navigate = useNavigate();
  const params = useParams();

  const courseInfo = courses.find((course) => course.id === params.id);

  const filteredFiles = courseInfo.files.map((file) => (
    <div className="sections-container">
      <div className="sections">
        <div className="file-name">
          <img src={fileIcon} alt="file-img" />
          <li>{file}</li>
        </div>
        <img src={trashCan} alt="file-img" className="trashcan-icon" />
      </div>
    </div>
  ));

  return (
    <div className="files-page">
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
          <p>Add a file</p>
        </div>
        {filteredFiles}
      </div>
      <InstructorNavbar />
    </div>
  );
}
