import React from "react";

import Container from "./components/container";
import Button from "./components/button";
import Modal from "./components/modal";

import "./App.css";

const [useState, useEffect] = React;

function App() {
  return (
    <div className="App">
      <Container>
        <Button />
        <Button />

        <Modal />
      </Container>
    </div>
  );
}

export default App;
