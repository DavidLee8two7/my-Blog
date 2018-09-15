import React, { Component } from "react";

import "./App.scss";

import Header from "../src/components/header/Header";
import Title from "../src/components/header/Title";
import Gallery from "../src/components/header/Gallery";

import Introduction from "../src/components/main/Introduction";
import TechSkills from "../src/components/main/TechSkills";
import Skill from "../src/components/main/Skill";
import Blank from "../src/components/main/Blank";

class App extends Component {
  render() {
    return (
      <div className="App start-line">
        <Header />
        <Title />
        <Gallery />
        <Introduction />
        <TechSkills />
        <Skill />
        <Blank />
      </div>
    );
  }
}

export default App;
