import React from "react";
import ReactDom from "react-dom";
import AddFileForm from "../Forms/AddFileForm";
import closeIcon from "../../assets/icons/close.svg"

export default function AddFileModal({open, onClose, course}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-style">
        <div className="modal-style">
          <img
            src={closeIcon}
            alt="close-icon"
            className="close-icon"
            onClick={onClose}
          />
          
          <AddFileForm onClose={onClose} course={course} />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
