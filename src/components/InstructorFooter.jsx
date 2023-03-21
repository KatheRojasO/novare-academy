import React from "react";
import { useNavigate } from "react-router-dom";
import addIcon from "../assets/icons/add.png";
import calendarIcon from "../assets/icons/calendar.png";
import courseIcon from "../assets/icons/course.png";
import slackIcon from "../assets/icons/slack.png";

export default function InstructorFooter() {
  const navigate = useNavigate();

  return (
    <div className="instructor-footer">
      <div className="container">
        <div className="icons-container">
          <img src={courseIcon} alt="course-logo" onClick={() => navigate("/instructor-page")} />
          <p>My courses</p>
        </div>
        <div className="icons-container">
          <img src={addIcon} alt="add-logo" onClick={() => navigate("/add-course")} />
          <p>Add courses</p>
        </div>
        <div className="icons-container">
          <img src={calendarIcon} alt="calendar-logo" />
          <p>Calendar</p>
        </div>
        <div className="icons-container">
          <img src={slackIcon} alt="slack-logo" />
          <p>Comunity</p>
        </div>
      </div>
    </div>
  );
}
