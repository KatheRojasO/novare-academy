import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorNavbar from "../../components/InstructorNavbar";
import linkIcon from "../../assets/icons/link.svg";
import userIcon from "../../assets/icons/user.svg";
import videoIcon from "../../assets/icons/video.svg";
import logo from "../../assets/images/logo.png";
import fileIcon from "../../assets/icons/file.svg";

export default function CoursePage() {
  const { courses } = useCourses();
  const params = useParams();
  const navigate = useNavigate();

  const courseInfo = courses.find((course) => course.id === params.id);

  return (
    <div className="course-page">
      <div className="logo-container">
        <img src={logo} alt="novareacademy-logo" className="novare-logo" />
      </div>
      <div className="container">
        <div className="sections-container">
          <div
            className="sections"
            onClick={() => navigate(`/course-page/${courseInfo.id}/recordings`)}
          >
            <img src={videoIcon} alt="file-img" />
            <h2>Recorded Classes</h2>
          </div>
          <div
            className="sections"
            onClick={() => navigate(`/course-page/${courseInfo.id}/files`)}
          >
            <img src={fileIcon} alt="file-img" />
            <h2>Files</h2>
          </div>
          <div
            className="sections"
            onClick={() => navigate(`/course-page/${courseInfo.id}/links`)}
          >
            <img src={linkIcon} alt="file-img" />
            <h2>Links</h2>
          </div>
          <div
            className="sections"
            onClick={() =>
              navigate(`/course-page/${courseInfo.id}/student-list`)
            }
          >
            <img src={userIcon} alt="file-img" />
            <h2>Students</h2>
          </div>
        </div>
      </div>
      <InstructorNavbar />
    </div>
  );
}
