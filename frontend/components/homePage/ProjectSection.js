import React, { Component } from "react";
import SectionTitle from "../styles/SectionTitle";
import {
  ProjectDiv,
  ProjectTitle,
  Card,
  CardFront,
  CardBack,
  PictureDiv,
  Details,
  BackDetails,
  Text
} from "./ProjectStyles";

class ProjectSection extends Component {
  render() {
    return (
      <ProjectDiv>
        <ProjectTitle>
          <a href="/skills">
            <SectionTitle
              visible={
                "Here are couple samples for React & GraphQL : PUG & Node"
              }
              invisible={"You can find more samples by clicking here!"}
            />
          </a>
        </ProjectTitle>
        <Card>
          <CardFront className="front">
            <PictureDiv>&nbsp;</PictureDiv>
            <h4>
              <span>Clothing Company's WebSite</span>
            </h4>
            <Details>
              <ul>
                <li>Receipes</li>
                <li>Restaurants</li>
              </ul>
            </Details>
          </CardFront>
          <CardBack className="back">
            <BackDetails>
              <Text>
                <p className="title">title</p>
                <p className="desc">desc</p>
              </Text>
              <a href="/projects">visit</a>
            </BackDetails>
          </CardBack>
        </Card>
      </ProjectDiv>
    );
  }
}

export default ProjectSection;
