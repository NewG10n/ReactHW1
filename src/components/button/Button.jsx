import React from "react";

import { createUseStyles } from "react-jss";
const styles = createUseStyles({
  btnModal: ({ color }) => ({
    backgroundColor: color,
    border: "none",
    padding: "16px 32px",
    borderRadius: "8px",
    color: "white",
    fontSize: "36px",
    cursor: "pointer",
  }),
  btnAction: {
    backgroundColor: "rgba(0,0,0,0.2)",
    border: "none",
    width: "28%",
    padding: "8px 16px",
    borderRadius: "4px",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },
});

const Button = ({ modal, toggleModal, color, text }) => {
  const classes = styles({ color });

  return (
    <button
      className={color ? classes.btnModal : classes.btnAction}
      onClick={
        toggleModal
          ? () => toggleModal(!modal)
          : () => console.log("there will be another func")
      }
    >
      {text}
    </button>
  );
};

export default Button;
