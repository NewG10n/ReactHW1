import React from "react";

const Button = ({ color, text, modal, toggleModal }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={() => toggleModal(!modal)}>
      {text}
    </button>
  );
};

export default Button;
