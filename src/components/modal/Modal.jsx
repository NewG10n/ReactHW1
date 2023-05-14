import React from "react";
import Button from "../button";

import { createUseStyles } from "react-jss";
const styles = createUseStyles({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  modalHeader: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Modal = ({ color, isOpen, toggleModal, header, text, closeButton }) => {
  const classes = styles();

  return (
    isOpen && (
      <div className={classes.modal} style={{ background: color }}>
        <div className={classes.modalHeader}>
          <h1>{header}</h1>
          {closeButton && (
            <Button text={"Close"} modal={isOpen} toggleModal={toggleModal} />
          )}
        </div>
        <p>{text}</p>
      </div>
    )
  );
};

export default Modal;
