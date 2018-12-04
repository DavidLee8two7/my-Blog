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
  Price
} from "./ProjectStyles";

class ProjectSection extends Component {
  render() {
    return (
      <ProjectDiv>
        <ProjectTitle>
          <a href="/skills">
            <SectionTitle
              visible={"Projects 📽️"}
              invisible={"You can find more samples by clicking here!"}
            />
          </a>
        </ProjectTitle>
        <Card>
          <CardFront className="front">
            <PictureDiv>&nbsp;</PictureDiv>
            <h4>
              <span>Korean FoodNet</span>
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
              <Price>
                <p className="title">title</p>
                <p className="desc">desc</p>
              </Price>
              <a href="/projects">visit</a>
            </BackDetails>
          </CardBack>
        </Card>
        <Card>
          <CardFront className="front">
            <PictureDiv>&nbsp;</PictureDiv>
            <h4>
              <span>Korean FoodNet</span>
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
              <Price>
                <p className="title">title</p>
                <p className="desc">desc</p>
              </Price>
              <a href="/projects">visit</a>
            </BackDetails>
          </CardBack>
        </Card>
        <Card>
          <CardFront className="front">
            <PictureDiv>&nbsp;</PictureDiv>
            <h4>
              <span>Korean FoodNet</span>
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
              <Price>
                <p className="title">title</p>
                <p className="desc">desc</p>
              </Price>
              <a href="/projects">visit</a>
            </BackDetails>
          </CardBack>
        </Card>
      </ProjectDiv>
    );
  }
}

export default ProjectSection;
