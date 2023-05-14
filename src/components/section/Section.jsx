import React, { useState } from "react";

import Button from "../button";
import Modal from "../modal";

import { createUseStyles } from "react-jss";
const styles = createUseStyles({
  section: {
    border: "4px solid black",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Section = ({ color, closeModalBtn }) => {
  const classes = styles();

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className={classes.section}>
      <Button
        color={color}
        text={"Get a " + color + " pill"}
        modal={isModalOpen}
        toggleModal={setModalOpen}
      />
      <Modal
        color={color}
        isOpen={isModalOpen}
        toggleModal={setModalOpen}
        header={color + " pill"}
        text={"Do you want to get a " + color + " pill?"}
        closeButton={closeModalBtn}
      />
    </section>
  );
};

export default Section;
