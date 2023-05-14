import React from "react";

import Container from "./components/container";
import Section from "./components/section";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Section color={"red"} closeModalBtn={false}/>

        <Section color={"blue"} closeModalBtn={true} />
      </Container>
    </div>
  );
}

export default App;
