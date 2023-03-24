import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import AddVideoModal from "../../components/Modals/AddVideoModal";
import InstructorNavbar from "../../components/InstructorNavbar";
import UpdateVideoModal from "../../components/Modals/UpdateVideoModal"
import addIcon from "../../assets/icons/add.svg";
import chevron from "../../assets/icons/chevron.svg";
import logo from "../../assets/images/logo.png";
import videoIcon from "../../assets/icons/video.svg";
import trashCan from "../../assets/icons/trashcan.svg";
import editIcon from "../../assets/icons/edit.svg";
import { updateCourse } from "../../scripts/CoursesCollection";

export default function RecordingPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const { courses } = useCourses();
  const { dispatch } = useCourses();
  const navigate = useNavigate();
  const params = useParams();

  const courseInfo = courses.find((course) => course.id === params.id);

  function deleteVideo(recording) {
    const clonedCourse = courseInfo;
    const currentVideoIndex = courseInfo.recordings.indexOf(recording);
    clonedCourse.recordings.splice(currentVideoIndex, 1);
    dispatch({ type: "update", payload: clonedCourse });
    updateCourse(clonedCourse)
  }

  const filteredLinks = courseInfo.recordings.map((recording) => (
    <div className="sections-container">
      <div className="sections">
        <div className="file-name">
          <img src={videoIcon} alt="file-img" className="video-icon" />
          <Link to={recording.link}>
            <li>{recording.name}</li>
          </Link>
        </div>
        <div className="links-icons">
          <img
            src={editIcon}
            alt="file-img"
            className="edit-icon"
            onClick={() => setIsUpdateModalOpen(true)}
          />
          <UpdateVideoModal
            course={courseInfo}
            link={recording}
            open={isUpdateModalOpen}
            onClose={() => setIsUpdateModalOpen(false)}
          />
          <img
            src={trashCan}
            alt="file-img"
            className="trashcan-icon"
            onClick={() => deleteVideo(recording)}
          />
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
          <p onClick={() => setIsAddModalOpen(true)}>Add a video</p>
          <AddVideoModal
            course={courseInfo}
            open={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
          />
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
