import React, { useState } from "react";

export default function AddCourseForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    const itemObject = {
      name: name,
      description: description,
    };
    // onCreateItem(itemObject);
    // setName("");
    // setDescription("");
    setFormSubmit(true);
    event.target.reset();
  }
  return (
    <div>
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
    </div>
  );
}
