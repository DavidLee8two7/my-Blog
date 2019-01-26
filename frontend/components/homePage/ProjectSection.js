import React, { Component } from "react";
import SVGIcon from "../styles/SVGIcon";
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
  render() {
    return (
      <ProjectDiv>
        <Card>
          <CardFront className="front">
            <PictureDiv
              style={{
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(255,255,255, 0.2),
                    rgba(255,255,255, 0.4)
                    ),
                    url(/static/img/tShirts.jpg)`
              }}
            >
              <img src="/static/img/curl.png" alt="curl" />
            </PictureDiv>
            <h4>
              <div>
                <span>Website : </span>
              </div>
              <span>T-shirts Factory, CA</span>
            </h4>
            <FrontDesc>
              <ul>
                <li>JWT Authentication</li>
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
                    <strong>Next.js</strong> for server side rendering
                  </li>
                  <li>
                    <strong>Apollo Client</strong> for Managing States
                  </li>
                  <li>
                    <strong>Styled Components</strong> for styling
                  </li>
                  <li>
                    <strong>GraphQL Yoga</strong> for Server Side Logic
                  </li>
                  <li>
                    <strong>Prisma</strong> CRUD APIs for MySQL Database
                  </li>
                </ul>
              </ProjectInfo>
              <ProjectLink>
                <div className="icon">
                  <a
                    className="icon"
                    aria-label="project"
                    href="https://github.com/SanBuNam/T-shirts-factory-prototype"
                    target="_blank"
                  >
                    <SVGIcon name={"github"} />
                  </a>
                </div>
                <div className="icon">
                  <a
                    aria-label="website"
                    href="https://tshirtsfactory.herokuapp.com/"
                    target="_blank"
                  >
                    <SVGIcon name={"external"} viewBox={"0 0 28 28"} />
                  </a>
                </div>
              </ProjectLink>
            </BackDesc>
          </CardBack>
        </Card>
        <InfoDiv>
          <h4>Fullstack JavaScript Web Developer</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have experience as an ERP
            system consultant & Business consultant but{" "}
            <span>I now only focus on being a web developer</span> but my
            knowledge of multiple fields allows me to work on a project with the
            full scope in mind; simplifying the process of our working together
            and producing a more cohesive experience for your users.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A web developer's role is to
            combine design and business logic to achieve a user-facing product.{" "}
            <span>
              To do this successfully, a wide skill set is necessary to produce
              a quality user experience that leads to meeting business goals.
            </span>
          </p>
        </InfoDiv>
        <Card>
          <CardFront className="front">
            <PictureDiv
              style={{
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(255,255,255, 0.2),
                      rgba(255,255,255, 0.4)
                    ),
                    url(/static/img/korean_meal.jpg)`
              }}
            >
              <img src="/static/img/curl.png" alt="curl" />
            </PictureDiv>
            <h4>
              <div>
                <span>Web App : </span>
              </div>
              <span>Korean Food Network</span>
            </h4>
            <FrontDesc>
              <ul>
                <li>User Permission Manage</li>
                <li>Image Uploading</li>
                <li>Password Reset</li>
                <li>Ajax Search Interface</li>
                <li>Custom Google Map</li>
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
                    <strong>Pug(Jade)</strong> template engine
                  </li>
                  <li>
                    <strong>SCSS</strong> for styling
                  </li>
                  <li>
                    <strong>Node Express</strong> for Server Side Logic
                  </li>
                  <li>
                    <strong>Bcrypt & JWToken</strong> for Authentication
                  </li>
                  <li>
                    <strong>MongoDB</strong> for backend database
                  </li>
                </ul>
              </ProjectInfo>
              <ProjectLink>
                <div className="icon">
                  <a
                    className="icon"
                    aria-label="project"
                    href="https://github.com/SanBuNam/korean-food-network.git"
                    target="_blank"
                  >
                    <SVGIcon name={"github"} />
                  </a>
                </div>
                <div className="icon">
                  <a
                    aria-label="website"
                    href="https://korean-food-network-cpvkitibkk.now.sh/"
                    target="_blank"
                  >
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
