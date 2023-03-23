import React, { useState } from "react";
import { createCourse } from "../scripts/CoursesCollection";
import { useCourses } from "../state/CoursesContextProvider";
import { useUser } from "../state/UserContextProvider";

export default function AddCourseForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const { user } = useUser();
  const { dispatch } = useCourses();

  function onSubmit(event) {
    event.preventDefault();

    const courseObject = {
      name: name,
      description: description,
      instructor: user.name,
      files: [],
      links: [],
      recordings: [],
      students: [],
    };

    createCourse(courseObject);
    dispatch({ type: "create", payload: courseObject });

    setName("");
    setDescription("");

    setFormSubmit(true);
    event.target.reset();
  }
  return (
    <form className="add-form" onSubmit={(event) => onSubmit(event)}>
      <div className="form-title">
        <h2>Add a new course:</h2>
      </div>
      <div className="message">
        <p>{formSubmit && "The product was created succesfully "}</p>
      </div>
      <div className="form-inputs">
        <label className="add-form-label">
          Course name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="add-form-label">
          Course description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
      </div>
      <button className="add-button">Add course</button>
    </form>
  );
}
