import React from "react";
import "./modal.css";

const Modal = ({ heading, text }) => {
  return (
    <div className="saep__modal">
      <div className="saep__modal-container">
        <div className="saep__modal-image"></div>
        <div className="saep__modal-heading">{heading}</div>
        <div className="saep__modal-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
