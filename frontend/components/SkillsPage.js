import React, { Component } from "react";
import Experience from "./skillsPage/Experience";
import Others from "./skillsPage/Others";
import Skill from "./skillsPage/Skill";
import {
  TechSkills,
  TechContainer,
  TechIntro,
  TechMessage,
  SkillsDiv,
  Title,
  SkillCatetory
} from "./styles/SkillsStyles";
import { skillsData } from "../lib/resourceData";

class Skills extends Component {
  render() {
    return (
      <TechSkills>
        <TechContainer>
          <TechIntro>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 20">
              <text x="0" y="16">
                Tech Skills
              </text>
            </svg>
            <TechMessage>
              <p>
                Here are some <span>tools</span> that I enjoy improving while I
                am <span>looking for something good and new to learn</span>. You
                can also find some of my previous <span>experiences</span>{" "}
                listed below.
              </p>
            </TechMessage>
          </TechIntro>
          <SkillsDiv>
            {skillsData.resources.map(resource => (
              <SkillCatetory key={resource.title}>
                <Title>
                  <h4>{resource.title}</h4>
                </Title>
                <Skill tech={resource.tech} />
              </SkillCatetory>
            ))}
          </SkillsDiv>
        </TechContainer>
        <Experience />
        <Others />
      </TechSkills>
    );
  }
}

export default Skills;
