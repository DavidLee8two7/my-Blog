import React, { Component } from "react";
import SectionTitle from "../styles/SectionTitle";
import SVGIcon from "../styles/SVGIcon";
import { ProjectDiv, ProjectTitle, InfoDiv } from "./ProjectStyles";
import {
  Card,
  CardFront,
  CardBack,
  PictureDiv,
  FrontDesc,
  BackDesc,
  ProjectInfo,
  ProjectLink
} from "../styles/FlipCard";

class ProjectSection extends Component {
  render() {
    return (
      <ProjectDiv>
        <ProjectTitle>
          <a href="/projects">
            <SectionTitle
              visible={"Samples for React & GraphQL"}
              invisible={"You can find more samples by clicking here!"}
            />
          </a>
        </ProjectTitle>
        <Card>
          <CardFront className="front">
            <PictureDiv>&nbsp;</PictureDiv>
            <h4>
              <span>T-shirts Factory, CA</span>
            </h4>
            <FrontDesc>
              <ul>
                <li>User Account Manage</li>
                <li>Sending Email</li>
                <li>Shopping Cart</li>
                <li>Pagination</li>
                <li>Credit Card Checkout</li>
              </ul>
            </FrontDesc>
          </CardFront>
          <CardBack className="back">
            <BackDesc>
              <ProjectInfo>
                <h4>
                  <span>React Fullstack</span>
                </h4>
                <ul>
                  <li>
                    <strong>Ruby on Rails</strong> backend
                  </li>
                  <li>
                    <strong>Materialize CSS</strong> frontend
                  </li>
                  <li>
                    User <strong>authentication</strong> via Devise
                  </li>
                  <li>
                    Implemented <strong>liking functionality</strong>
                  </li>
                  <li>
                    <strong>Client-side rendering</strong> via AJAX
                  </li>
                </ul>
              </ProjectInfo>
              <ProjectLink>
                <div className="icon">
                  <a
                    clasName="icon"
                    aria-label="project"
                    href="https://github.com"
                    target="_blank"
                  >
                    <SVGIcon name={"github"} />
                  </a>
                </div>
                <div className="icon">
                  <a aria-label="website" href="" target="_blank">
                    <SVGIcon name={"external"} viewBox={"0 0 28 28"} />
                  </a>
                </div>
              </ProjectLink>
            </BackDesc>
          </CardBack>
        </Card>
        <InfoDiv>
          <h4>
            <span>Korean Food Network</span>
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus quaerat atque eligendi ullam totam, qui deserunt aut
            fugiat omnis doloribus iste excepturi! Ex corporis fuga ducimus
            dolor neque ratione deleniti?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus quaerat atque eligendi ullam totam, qui deserunt aut
            fugiat omnis doloribus iste excepturi! Ex corporis fuga ducimus
            dolor neque ratione deleniti?
          </p>
        </InfoDiv>
        <Card>
          <CardFront className="front">
            <PictureDiv>&nbsp;</PictureDiv>
            <h4>
              <span>Korean Food Network</span>
            </h4>
            <FrontDesc>
              <ul>
                <li>User Permission Manage</li>
                <li>Image Uploading</li>
                <li>Password Reset</li>
                <li>Search Bar</li>
                <li>Google Map</li>
              </ul>
            </FrontDesc>
          </CardFront>
          <CardBack className="back">
            <BackDesc>
              <ProjectInfo>
                <h4>
                  <span>Node Fullstack</span>
                </h4>
                <ul>
                  <li>
                    <strong>Ruby on Rails</strong> backend
                  </li>
                  <li>
                    <strong>Materialize CSS</strong> frontend
                  </li>
                  <li>
                    User <strong>authentication</strong> via Devise
                  </li>
                  <li>
                    Implemented <strong>liking functionality</strong>
                  </li>
                  <li>
                    <strong>Client-side rendering</strong> via AJAX
                  </li>
                </ul>
              </ProjectInfo>
              <ProjectLink>
                <div className="icon">
                  <a
                    clasName="icon"
                    aria-label="project"
                    href="https://github.com"
                    target="_blank"
                  >
                    <SVGIcon name={"github"} />
                  </a>
                </div>
                <div className="icon">
                  <a aria-label="website" href="" target="_blank">
                    <SVGIcon name={"external"} viewBox={"0 0 28 28"} />
                  </a>
                </div>
              </ProjectLink>
            </BackDesc>
          </CardBack>
        </Card>
      </ProjectDiv>
    );
  }
}

export default ProjectSection;
