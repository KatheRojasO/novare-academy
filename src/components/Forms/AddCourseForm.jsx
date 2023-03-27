import React, { useState } from "react";
import { downloadFile } from "../../scripts/CloudStorage/DownloadFile";
import { uploadFile } from "../../scripts/CloudStorage/UploadFile";
import { createCourse } from "../../scripts/CoursesCollection";
import { useCourses } from "../../state/CoursesContextProvider";
import { useUser } from "../../state/UserContextProvider";

// code is too long, we teach some tricks to shorten it like putting the courseObject in a json file, among others
export default function AddCourseForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const { user } = useUser();
  const { dispatch } = useCourses();

  async function onSubmit(event) {
    event.preventDefault();

    const filePath = `course/${name}_${file.name}`;
    await uploadFile(file, filePath);
    const fileUrl = await downloadFile(filePath);

    // although putting the files and links inside the course object works, it limits your capacirty of making more complex changes.
    // next time try to store each type item inside a collection
    const courseObject = {
      name: name,
      description: description,
      image: fileUrl,
      instructor: user.name,
      files: [],
      links: [],
      recordings: [],
      students: [],
    };

    const newCourse = createCourse(courseObject);
    dispatch({ type: "create", payload: newCourse });

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
        <p>{formSubmit && "Your course was created succesfully "}</p>
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
        <label className="add-form-label">
          File:
          <input
            type="file"
            onChange={(event) => setFile(event.target.files[0])}
            required
          />
        </label>
      </div>
      <button className="add-button">Add course</button>
    </form>
  );
}
