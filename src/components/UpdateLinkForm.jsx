import React, { useState } from "react";
import { updateCourse } from "../scripts/CoursesCollection";
import { useCourses } from "../state/CoursesContextProvider";

export default function UpdateLinkForm({ onClick, course, currentLink }) {
  const [name, setName] = useState(currentLink.name);
  const [link, setLink] = useState(currentLink.link);
  const { dispatch } = useCourses();

  function onSubmit(event) {
    event.preventDefault();

    const updatedLink = {
      name: name,
      link: link,
    };

    const clonedCourse = course;
    const currentLinkIndex = course.links.indexOf(currentLink);
    clonedCourse.links[currentLinkIndex] = updatedLink;
    dispatch({ type: "update", payload: clonedCourse });
    updateCourse(clonedCourse);
    onClick();
  }

  return (
    <form className="add--links-form" onSubmit={(event) => onSubmit(event)}>
      <div className="form-title">
        <h3>Share a Juan:</h3>
      </div>
      <div className="form-inputs">
        <label>
          Link name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength="30"
            required
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            value={link}
            onChange={(event) => setLink(event.target.value)}
            required
          />
        </label>
      </div>
      <div className="form-button">
        <button>Update link</button>
      </div>
    </form>
  );
}
