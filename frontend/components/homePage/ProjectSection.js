import React, { Component } from "react";
import SectionTitle from "../styles/SectionTitle";
import { ProjectDiv, ProjectTitle, Project } from "./ProjectStyles";

class ProjectSection extends Component {
  render() {
    return (
      <ProjectDiv>
        <ProjectTitle>
          <a href="/skills">
            <SectionTitle visible={"Here are some of sample projects 😀"} invisible={"You can find more by clicking here!"} />
          </a>
        </ProjectTitle>
        <Project>
          <a href="/skills">
            <img
              className="project"
              src="/static/img/CJ.jpeg"
              alt="company logo"
            />
          </a>
          <div className="shade">Food-stack software developer</div>
        </Project>
        <Project>
          <a>
            <img
              className="project"
              src="/static/img/CJ.jpeg"
              alt="company logo"
            />
          </a>
          <div className="shade">Food-stack software developer</div>
        </Project>
        <Project>
          <a>
            <img
              className="project"
              src="/static/img/CJ.jpeg"
              alt="company logo"
            />
          </a>
          <div className="shade">Food-stack software developer</div>
        </Project>
      </ProjectDiv>
    );
  }
}

export default ProjectSection;
