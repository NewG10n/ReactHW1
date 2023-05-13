import React from "react";

import Container from "./components/container";
import Button from "./components/button";
import Modal from "./components/modal";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Button text={"Open first modal"} />
        <Modal header={"First modal"} />

        <Button text={"Open second modal"} />
        <Modal header={"Second modal"} />
      </Container>
    </div>
  );
}

export default App;
