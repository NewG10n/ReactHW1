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

  modal: ({ color }) => ({
    backgroundColor: color,
    color: "white",
    width: "500px",
    height: "200px",
    borderRadius: "8px",
    paddingBottom: "16px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  }),

  modalHeader: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: "100%",
    boxSizing: "border-box",
    padding: "8px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalActions: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: '16px'
  },
});

const Actions = ({ canConfirm, canDecline, className }) => {
  return (
    <div className={className}>
      {canDecline && <Button text={"Not sure"} />}
      {canConfirm && <Button text={"Get"} />}
    </div>
  );
};

const Modal = ({ isOpen, toggleModal, color, header, text, closeButton }) => {
  const classes = styles({ color });

  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal(!isOpen);
    }
  };

  return (
    isOpen && (
      <div className={classes.modalWrapper} onClick={handleWrapperClick}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h2>{header}</h2>
            {closeButton && (
              <Button
                modal={isOpen}
                toggleModal={toggleModal}
                text={"X"}
                color={"transparent"}
              />
            )}
          </div>
          <p>{text}</p>
          <Actions
            canConfirm={true}
            canDecline={!!closeButton}
            className={classes.modalActions}
          />
        </div>
      </div>
    )
  );
};

export default Modal;
