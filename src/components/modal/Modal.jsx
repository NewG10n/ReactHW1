import React from "react";

const Modal = ({ header, text, closeButton }) => {
  return (
    <div className="modal">
      <h1>{header}</h1>
      <p>{text}</p>
      <button>{closeButton ? "X" : null}</button>
    </div>
  );
};

export default Modal;
