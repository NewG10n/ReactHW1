import React from "react";

const Modal = ({ content }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>{content.header}</h1>
        <p>{content.text}</p>
      </div>
    </div>
  );
};

export default Modal;
