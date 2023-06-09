import React from "react";
import { Link, useNavigate } from "react-router-dom";
import addIcon from "../assets/icons/add.png";
import calendarIcon from "../assets/icons/calendar.png";
import courseIcon from "../assets/icons/course.png";
import slackIcon from "../assets/icons/slack.png";
import logoutIcon from "../assets/icons/logout.svg";
import { removeUserSession } from "../scripts/UserSessionHandler";
import { useUser } from "../state/UserContextProvider";

export default function InstructorFooter() {
  const { dispatch } = useUser();
  const navigate = useNavigate();

  function logout(){
    removeUserSession()
    dispatch({ type: "remove" })
    navigate("/")
  }

  return (
    <div className="instructor-footer">
      <div className="container">
        <div className="icons-container">
          <img
            src={courseIcon}
            alt="course-logo"
            onClick={() => navigate("/instructor-page")}
          />
          <p>My courses</p>
        </div>
        <div className="icons-container">
          <img
            src={addIcon}
            alt="add-logo"
            className="add-logo"
            onClick={() => navigate("/add-course")}
          />
          <p>Add courses</p>
        </div>
        <Link to="https://calendar.google.com/calendar/u/0/r">
          <div className="icons-container">
            <img src={calendarIcon} alt="calendar-logo" />
            <p>Calendar</p>
          </div>
        </Link>
        <Link to="https://app.slack.com">
          <div className="icons-container">
            <img src={slackIcon} alt="slack-logo" />
            <p>Comunity</p>
          </div>
        </Link>
        <div className="icons-container" onClick={() => logout()}>
          <img src={logoutIcon} alt="logout-logo" />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
}
