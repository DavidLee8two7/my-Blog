import React, { Component } from "react";
import SVGIcon from "../styles/SVGIcon";
import Fade from "react-reveal/Fade";
import { ProjectDiv, InfoDiv } from "./ProjectStyles";
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
  state = {
    show: false
  };

  render() {
    return (
      <Fade
        left
        fraction={0.5}
        onReveal={() => {
          this.setState({ show: true });
        }}
      >
        <div
          style={{
            gridRow: "5",
            gridColumn: "1 / -1",
            width: "100%",
            background: "white"
          }}
        >
          <ProjectDiv>
            <Card>
              <CardFront className="front">
                <PictureDiv>&nbsp;</PictureDiv>
                <h4>
                  <span>T-shirts Factory, CA</span>
                </h4>
                <FrontDesc>
                  <ul>
                    <li>User Account</li>
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
                        className="icon"
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
                <span>
                  I have many years experience as a front-end developer, ERP
                  system developing & business consulting.
                </span>
              </h4>
              <p>
                A web developer's role is to combine design and business logic
                to achieve a user-facing product. To do this successfully, a
                wide skill set is necessary to produce a quality user experience
                that leads to meeting business goals.
              </p>
              <p>
                I now specialise in front-end development but my knowledge of
                multiple fields allows me to work on a project with the full
                scope in mind; simplifying the process of our working together
                and producing a more cohesive experience for your users.
              </p>
            </InfoDiv>
            <Card>
              <CardFront className="front">
                <PictureDiv
                  style={{
                    backgroundImage: ""
                  }}
                >
                  &nbsp;
                </PictureDiv>
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
                        className="icon"
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
        </div>
      </Fade>
    );
  }
}

export default ProjectSection;
