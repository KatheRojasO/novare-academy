import React, { useState } from "react";
import { updateCourse } from "../../scripts/CoursesCollection";
import { useCourses } from "../../state/CoursesContextProvider";

export default function LinkForm({ onClick, course }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const { dispatch } = useCourses();

  function onSubmit(event) {
    event.preventDefault();

    const newLink = {
      name: name,
      link: link,
    };

    const newLinkList = [...course.links, newLink];
    const updatedCourse = {
      id: course.id,
      name: course.name,
      description: course.description,
      instructor: course.instructor,
      files: course.files,
      links: newLinkList,
      recordings: course.recordings,
      students: course.students,
    };
    console.log(updatedCourse)
    dispatch({ type: "update", payload: updatedCourse });
    updateCourse(updatedCourse);
    onClick();
  }

  return (
    <form className="add--links-form" onSubmit={(event) => onSubmit(event)}>
      <div className="form-title">
        <h3>Share a link:</h3>
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
        <button>Add link</button>
      </div>
    </form>
  );
}
