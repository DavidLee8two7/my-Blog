import React, { Component } from "react";
import styled from "styled-components";

const ProjectDiv = styled.div`
  z-index: 2;
  grid-row: 5;
  grid-column: 1 / span 4;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  background: ${props => props.theme.offWhite};
`;

const ProjectTitle = styled.div`
  z-index: 3;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / span 3;
  padding: 2rem;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  background-color: ${props => props.theme.offWhite};
`;

const Project = styled.div`
  width: 100%;
  grid-row: 2;
  justify-items: center;
  align-items: center;
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
            <img src="/static/img/camping.jpg" alt="company logo" />
          </a>
          <p>Food-stack software developer</p>
        </Project>
        <Project>
          <a href="">
            <img src="/static/img/camping.jpg" alt="company logo" />
          </a>
          <p>Food-stack software developer</p>
        </Project>
        <Project>
          <a href="">
            <img src="/static/img/camping.jpg" alt="company logo" />
          </a>
          <p>Food-stack software developer</p>
        </Project>
      </ProjectDiv>
    );
  }
}

export default ProjectSection;
