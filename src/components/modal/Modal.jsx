import React from "react";

const Modal = ({ isOpen, header, text, closeButton }) => {
  return isOpen ? (
    <div className="modal">
      <h1>{header}</h1>
      <p>{text}</p>
      <button>{closeButton ? "X" : null}</button>
    </div>
  ) : null;
};

export default Modal;
