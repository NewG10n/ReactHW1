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
        modal={isModalOpen}
        toggleModal={setModalOpen}
        color={color}
        text={"Get a " + color + " pill"}
      />
      <Modal
        isOpen={isModalOpen}
        toggleModal={setModalOpen}
        color={color}
        header={"You choose a " + color + " pill"}
        text={"Do you want to get a " + color + " pill?"}
        closeButton={closeModalBtn}
      />
    </section>
  );
};

export default Section;
