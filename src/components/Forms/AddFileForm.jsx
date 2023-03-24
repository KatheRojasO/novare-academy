import React, { useState } from "react";
import { downloadFile } from "../../scripts/CloudStorage/DownloadFile";
import { uploadFile } from "../../scripts/CloudStorage/UploadFile";
import { updateCourse } from "../../scripts/CoursesCollection";
import { useCourses } from "../../state/CoursesContextProvider";

export default function AddFileForm({onClose, course}) {
  const [file, setFile] = useState("");
  const { dispatch } = useCourses();

  async function onSubmit(event) {
    event.preventDefault();

    const filePath = `course/${course.id}/file/${file.name}`;
    await uploadFile(file, filePath)
    const url = await downloadFile(filePath);

    const newFile = {
        name: file.name,
        link: url
    }

    console.log(newFile)

    const newFileList = [...course.files, newFile];
    const updatedCourse = {
        id: course.id,
        name: course.name,
        description: course.description,
        instructor: course.instructor,
        files: newFileList,
        links: course.links,
        recordings: course.recordings,
        students: course.students,
      };
      dispatch({ type: "update", payload: updatedCourse });
      updateCourse(updatedCourse);
      
      onClose()
  }
  return (
    <form className="add--links-form" onSubmit={(event) => onSubmit(event)}>
      <div className="form-title">
        <h3>Share a file:</h3>
      </div>
      <div className="form-inputs">
        <label className="add-form-label">
          File:
          <input
            type="file"
            onChange={(event) => setFile( event.target.files[0])}
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
