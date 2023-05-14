import React from "react";

const Button = ({ color, text, modal, toggleModal }) => {
  const handleButtonClick = () => toggleModal(!modal);

  return (
    <button style={{ background: color }} onClick={handleButtonClick}>
      {text}
    </button>
  );
};

export default Button;
