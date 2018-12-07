import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import SectionTitle from "../styles/SectionTitle";
import {
  Experience,
  ExperienceTitle,
  ShapeDiv,
  StyledImg,
  TextDiv,
  CaptionDiv,
  DetailsDiv
} from "./ExperienceStyles";

class ExperienceSection extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <Reveal
        bottom
        fraction={0.6}
        onReveal={() => {
          this.setState({ show: true });
        }}
      >
        <div
          style={{
            gridRow: "6",
            gridColumn: "1 / -1",
            width: "100%",
            justifyItems: "center",
            alignItems: "center"
          }}
        >
          <ExperienceTitle>
            <a href="/talents">
              <SectionTitle
                visible={"Experience 📽️"}
                invisible={"You can find more information here!"}
              />
            </a>
          </ExperienceTitle>
          <Experience>
            <ShapeDiv>
              <StyledImg
                src="/static/img/face.jpeg"
                alt="profile"
                className="image"
              />
              <CaptionDiv className="caption">🐵</CaptionDiv>
            </ShapeDiv>
            <TextDiv>
              <h4>
                Software Developer / ERP(SAP) System consultant / Supply Chain
                Management
              </h4>
              <p>
                I can help the client to create responsive websites that work on
                a wide range of devices Assist with production of clean and
                functional design Bridge communication gap between designers and
                developers Integrate your website into an easy to use content
                management system.
              </p>
            </TextDiv>
            <DetailsDiv>
              <div>
                <h4>Projects</h4>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>
              </div>
              <div>
                <h4>Accomplishments</h4>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>
              </div>
            </DetailsDiv>
          </Experience>
        </div>
      </Reveal>
    );
  }
}

export default ExperienceSection;
