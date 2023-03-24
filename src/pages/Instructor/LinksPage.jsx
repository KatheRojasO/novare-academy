import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../state/CoursesContextProvider";
import InstructorNavbar from "../../components/InstructorNavbar";
import chevron from "../../assets/icons/chevron.svg";
import addIcon from "../../assets/icons/add.svg";
import logo from "../../assets/images/logo.png";
import linkIcon from "../../assets/icons/link.svg";
import trashCan from "../../assets/icons/trashcan.svg";
import editIcon from "../../assets/icons/edit.svg";
import AddLinkModal from "../../components/AddLinkModal";
import UpdateLinkModal from "../../components/UpdateLinkModal";

export default function LinksPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const { courses } = useCourses();
  const navigate = useNavigate();
  const params = useParams();

  const courseInfo = courses.find((course) => course.id === params.id);

  const filteredLinks = courseInfo.links.map((link) => (
    <div className="sections-container">
      <div className="sections">
        <div className="file-name">
          <img src={linkIcon} alt="file-img" />
          <Link to={link.link}>
            <li>{link.name}</li>
          </Link>
        </div>
        <div className="links-icons">
          <img src={editIcon} alt="file-img" className="edit-icon" onClick={() => setIsUpdateModalOpen(true)} />
          <UpdateLinkModal
            course={courseInfo}
            link={link}
            open={isUpdateModalOpen}
            onClose={() => setIsUpdateModalOpen(false)}
          />
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
        <div className="add-files-option">
          <img src={addIcon} alt="add-icon" className="add-icon" />
          <p onClick={() => setIsAddModalOpen(true)}>Add a link</p>
          <AddLinkModal
            course={courseInfo}
            open={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
          />
        </div>
        {filteredLinks}
      </div>
      <InstructorNavbar />
    </div>
  );
}
