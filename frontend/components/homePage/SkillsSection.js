import React, { Component } from "react";
import styled from "styled-components";

const SkillsDiv = styled.div`
  grid-row: 4;
  grid-column: 1 / span 4;
  width: 90%;
  height: 30vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  background: linear-gradient(rgba(0, 216, 255, 0.5), rgba(0, 216, 255, 0.5));
`;

const Skill = styled.div`
  width: 100%;
  img {
    display: block;
    margin: 0;
    width: 100%;
  }
  p {
    text-align: center;
  }
`;

class Skills extends Component {
  render() {
    return (
      <SkillsDiv>
        <h2>current</h2>
        <Skill>two</Skill>
      </SkillsDiv>
    );
  }
}

export default Skills;
