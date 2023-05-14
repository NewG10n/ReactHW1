import React from "react";

import Container from "./components/container";
import Button from "./components/button";
import Modal from "./components/modal";

import "./App.css";

const { useState } = React;

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('')

  return (
    <div className="App">
      <Container>
        <Button
          color={"red"}
          text={"Open first modal"}
          modal={isModalOpen}
          toggleModal={setModalOpen}
        />
        <Button
          color={"blue"}
          text={"Open second modal"}
          modal={isModalOpen}
          toggleModal={setModalOpen}
        />

        <Modal isOpen={isModalOpen} />
      </Container>
    </div>
  );
}

export default App;
