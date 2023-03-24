import React from "react";
import ReactDom from "react-dom";
import LinkUpdateForm from "./UpdateLinkForm";
import closeIcon from "../assets/icons/close.svg"

export default function UpdateLinkModal({open, children, onClose, course, link}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-style">
        <div className="modal-style">
          <img src={closeIcon} alt="close-icon" className="close-icon" onClick={onClose} />
          {children}
          <LinkUpdateForm onClick={onClose} course={course} currentLink={link}/>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}