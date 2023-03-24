import React, { useState } from "react";
import { updateCourse } from "../scripts/CoursesCollection";
import { useCourses } from "../state/CoursesContextProvider";

export default function VideoForm({ onClick, course }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const { dispatch } = useCourses();

  function onSubmit(event) {
    event.preventDefault();

    const newVideo = {
      name: name,
      link: link,
    };
    
    const newVideoList = [...course.recordings, newVideo];
    const updatedCourse = {
      id: course.id,
      name: course.name,
      description: course.description,
      instructor: course.instructor,
      files: course.files,
      links: course.links,
      recordings: newVideoList,
      students: course.students,
    };
    dispatch({ type: "update", payload: updatedCourse });
    updateCourse(updatedCourse);
    setFormSubmit(true);
    setName("");
    setLink("");
    onClick();
  }

  return (
    <form className="add--links-form" onSubmit={(event) => onSubmit(event)}>
      <div className="form-title">
        <h3>Share a link:</h3>
      </div>
      <div className="message">
        <p>{formSubmit && "The link was added succesfully"}</p>
      </div>
      <div className="form-inputs">
        <label>
          Link name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength='30'
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
