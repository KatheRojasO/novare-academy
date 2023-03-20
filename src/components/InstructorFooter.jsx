import React from "react";
import addIcon from "../assets/icons/add.png";
import calendarIcon from "../assets/icons/calendar.png";
import courseIcon from "../assets/icons/course.png";
import slackIcon from "../assets/icons/slack.png";

export default function InstructorFooter() {
  return (
    <div className="instructor-footer">
      <div className="container">
        <div className="icons-container">
          <img src={courseIcon} alt="course-logo" />
          <p>My courses</p>
        </div>
        <div className="icons-container">
          <img src={addIcon} alt="add-logo" />
          <p>My courses</p>
        </div>
        <div className="icons-container">
          <img src={calendarIcon} alt="calendar-logo" />
          <p>My courses</p>
        </div>
        <div className="icons-container">
          <img src={slackIcon} alt="slack-logo" />
          <p>My courses</p>
        </div>
      </div>
    </div>
  );
}
