import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorFooter from "../../components/InstructorFooter";
import logo from "../../assets/images/logo.png";
import file from "../../assets/icons/file.svg";


export default function CoursePage() {
  const { courses } = useCourses();
  const params = useParams();
  const navigate = useNavigate();

  const courseInfo = courses.find((course) => course.id === params.id)

  return (
    <div className="course-page">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="novareacademy-logo" className="novare-logo" />
        </div>
        <div className="sections-container">
          <div className="sections">
            <img src={file} alt="file-img" />
            <h2>Recorded Classes</h2>
          </div>
          <div className="sections" onClick={()=> navigate(`/course-page/${courseInfo.id}/files`)}>
            <img src={file} alt="file-img" />
            <h2>Files</h2>
          </div>
          <div className="sections">
            <img src={file} alt="file-img" />
            <h2>Links</h2>
          </div>
          <div className="sections">
            <img src={file} alt="file-img" />
            <h2>Students</h2>
          </div>
        </div>
      </div>

      <InstructorFooter />
    </div>
  );
}
