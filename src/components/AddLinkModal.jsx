import React from "react";
import ReactDom from "react-dom";
import LinkForm from "./LinkForm";
import closeIcon from "../assets/icons/close.svg"

export default function AddLinkModal({open, children, onClose, course}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-style">
        <div className="modal-style">
          <img src={closeIcon} alt="close-icon" className="close-icon" onClick={onClose} />
          {children}
          <LinkForm onClick={onClose} course={course}/>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}