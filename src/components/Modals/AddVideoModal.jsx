import React from "react";
import ReactDom from "react-dom";
import VideoForm from "../Forms/VideoForm";
import closeIcon from "../../assets/icons/close.svg"

export default function AddVideoModal({open, children, onClose, course}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-style">
        <div className="modal-style">
          <img src={closeIcon} alt="close-icon" className="close-icon" onClick={onClose} />
          {children}
          <VideoForm onClick={onClose} course={course}/>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
