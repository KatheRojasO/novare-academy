import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorNavbar from "../../components/InstructorNavbar";
import AddFileModal from "../../components/Modals/AddFileModal";
import chevron from "../../assets/icons/chevron.svg";
import addIcon from "../../assets/icons/add.svg";
import logo from "../../assets/images/logo.png";
import fileIcon from "../../assets/icons/file.svg";
import trashCan from "../../assets/icons/trashcan.svg";
import { updateCourse } from "../../scripts/CoursesCollection";

export default function FilesPage() {
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const { courses, dispatch } = useCourses();
  const navigate = useNavigate();
  const params = useParams();

  const courseInfo = courses.find((course) => course.id === params.id);

  function deleteFile(file) {
    const clonedCourse = courseInfo;
    const currentFileIndex = courseInfo.files.indexOf(file);
    clonedCourse.files.splice(currentFileIndex, 1);
    dispatch({ type: "delete", payload: clonedCourse });
    updateCourse(clonedCourse)
  }

  const filteredFiles = courseInfo.files.map((file) => (
    <div className="sections-container">
      <div className="sections">
        <div className="file-name">
          <img src={fileIcon} alt="file-img" />
          <Link to={file.link}>
            <li>{file.name}</li>
          </Link>
        </div>
        <img src={trashCan} alt="file-img" className="trashcan-icon" onClick={() => deleteFile(file)} />
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
          <p onClick={() => setIsFileModalOpen(true)}>Add a file</p>
          <AddFileModal
            open={isFileModalOpen}
            onClose={() => setIsFileModalOpen(false)}
            course={courseInfo}
          />
        </div>
        {filteredFiles}
      </div>
      <InstructorNavbar />
    </div>
  );
}
