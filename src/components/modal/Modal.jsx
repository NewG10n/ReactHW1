import React from "react";
import Button from "../button";

import { createUseStyles } from "react-jss";
const styles = createUseStyles({
  modalWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },

  modal: {
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

  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal(!isOpen);
    }
  };

  return (
    isOpen && (
      <div className={classes.modalWrapper} onClick={handleWrapperClick}>
        <div className={classes.modal} style={{ background: color }}>
          <div className={classes.modalHeader}>
            <h1>{header}</h1>
            {closeButton && (
              <Button text={"Close"} modal={isOpen} toggleModal={toggleModal} />
            )}
          </div>
          <p>{text}</p>
        </div>
      </div>
    )
  );
};

export default Modal;
