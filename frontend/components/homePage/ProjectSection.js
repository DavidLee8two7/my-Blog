import React, { Component } from "react";
import styled from "styled-components";

const ProjectDiv = styled.div`
  grid-row: 6;
  grid-column: 1 / span 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ProjectTitle = styled.div`
  width: 100%;
  grid-row: 1;
  grid-column: 1 / span 3;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  background-color: ${props => props.theme.orange};
`;

const Project = styled.div`
  grid-row: 2;
  justify-items: center;
  align-items: center;
  width: 100%;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  h2 {
    font-size: 2.8rem;
    text-align: center;
  }
  p {
    font-size: 1.8rem;
    text-align: center;
  }
`;

class ProjectSection extends Component {
  render() {
    return (
      <ProjectDiv>
        <ProjectTitle>title</ProjectTitle>
        <Project>
          <a href="">
            <img src="/static/CJ.jpeg" alt="company logo" />
          </a>
          <p>Food-stack software developer</p>
        </Project>
      </ProjectDiv>
    );
  }
}

export default ProjectSection;
