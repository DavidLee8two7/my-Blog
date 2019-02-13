import React, { Component } from "react";
import SVGIcon from "../styles/SVGIcon";
import ProjectDiv from "./ProjectStyles";
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
                backgroundImage: `url(/static/img/chefs.jpg)`
              }}
            >
              <img src="/static/img/curl.png" alt="curl" />
            </PictureDiv>
            <h4>
              <div>
                <span>Web App:</span>
              </div>
              <span>Restaurant Trends & Menu Search App</span>
            </h4>
            <FrontDesc>
              <ul>
                <li>User Permission Manage</li>
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
                  <span>Restaurant App</span>
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
        <Card>
          <CardFront className="front">
            <PictureDiv
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(/static/img/tShirts.jpg)`
              }}
            >
              <img src="/static/img/curl.png" alt="curl" />
            </PictureDiv>
            <h4>
              <div>
                <span>E - Commerce :</span>
              </div>
              <span>Whole sale clothing co.</span>
            </h4>
            <FrontDesc>
              <ul>
                <li>JWT Authentication</li>
                <li>Automatic Email service</li>
                <li>Shopping Cart</li>
                <li>Credit Card Checkout</li>
              </ul>
            </FrontDesc>
          </CardFront>
          <CardBack className="back">
            <BackDesc>
              <ProjectInfo>
                <h4>
                  <span>E-commerce Site</span>
                </h4>
                <ul>
                  <li>
                    <strong>Next.js</strong> for server side rendering
                  </li>
                  <li>
                    <strong>Styled Components</strong> for styling
                  </li>
                  <li>
                    <strong>GraphQL Yoga</strong> for Server Side Logic
                  </li>
                  <li>
                    <strong>Prisma</strong> CRUD APIs for MySQL
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
        <Card>
          <CardFront className="front">
            <PictureDiv
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(/static/img/jsGames.png)`
              }}
            >
              <img src="/static/img/curl.png" alt="curl" />
            </PictureDiv>
            <h4>
              <div>
                <span>Games: </span>
              </div>
              <span>Famous Classic Games</span>
            </h4>
            <FrontDesc>
              <ul>
                <li>ATARI Breakout 🎮</li>
                <li>The Falling Star ⭐</li>
                <li>The Snake 🏂</li>
                <li>& more classic 🕹️</li>
              </ul>
            </FrontDesc>
          </CardFront>
          <CardBack className="back">
            <BackDesc>
              <ProjectInfo>
                <h4>
                  <span>Click to ▶️ Games</span>
                </h4>
                <ul>
                  <li>
                    <a
                      className="icon"
                      aria-label="breakoutGame"
                      href="https://sanbunam.github.io/Atari_Breakout_game/"
                      target="_blank"
                    >
                      <strong>Atari Breakout</strong>{" "}
                      <img src="/static/img/atari.png" alt="breakout" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon"
                      aria-label="snakeGame"
                      href="https://sanbunam.github.io/Catch_Falling_Star/"
                      target="_blank"
                    >
                      <strong>The Falling Star</strong>{" "}
                      <img src="/static/img/catch.png" alt="breakout" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon"
                      aria-label="fallingStar"
                      href="https://sanbunam.github.io/The_Snake_Game/"
                      target="_blank"
                    >
                      <strong>The Snake</strong>{" "}
                      <img src="/static/img/snake.png" alt="breakout" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon"
                      aria-label="codes"
                      href="https://github.com/SanBuNam/Classic_ATARI_Games"
                      target="_blank"
                    >
                      <strong>Github</strong>{" "}
                      <img
                        style={{
                          width: "7rem",
                          height: "2.5rem",
                          float: "right",
                          marginRight: "1rem"
                        }}
                        src="/static/img/softwareDev.png"
                        alt="breakout"
                      />
                    </a>
                  </li>
                </ul>
              </ProjectInfo>
            </BackDesc>
          </CardBack>
        </Card>
      </ProjectDiv>
    );
  }
}

export default ProjectSection;
