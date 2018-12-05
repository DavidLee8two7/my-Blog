import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import TechIcon from "../styles/TechIcon";
import SectionTitle from "../styles/SectionTitle";
import { TechTitle, IconsDiv, FrontDiv, BackDiv } from "./TechStyles";

class TechSection extends Component {
  state = {
    show: false
  };

  render() {
    const tech = {
      visible: {
        desc: "Currently focusing on 💻 React & GraphQL Fullstack"
      },
      invisible: {
        desc: "Please click to find more information!"
      },
      firstTech: {
        title: "react",
        src: "",
        viewBox: "",
        href: "https://reactjs.org/"
      },
      secondTech: {
        title: "apollo",
        src: "",
        viewBox: "0 0 256 256",
        href: "https://www.apollographql.com/docs/?no-cache=1"
      },
      thirdTech: {
        title: "graphql",
        src: "",
        viewBox: "",
        href: "https://graphql.org/learn/"
      },
      fourthTech: {
        title: "prisma",
        src: "",
        viewBox: "",
        href: "https://www.prisma.io/"
      }
    };

    return (
      <Zoom
        fraction={0.9}
        onReveal={() => {
          this.setState({ show: true });
        }}
      >
        <div
          style={{
            zIndex: "2",
            gridRow: "4",
            gridColumn: "1 / -1",
            width: "100%"
          }}
        >
          <TechTitle>
            <a href="/skills">
              <SectionTitle
                visible={"Currently focusing on React & GraphQL Fullstack 💻"}
                invisible={"Click will take you to talent page!"}
              />
            </a>
          </TechTitle>

          <IconsDiv>
            <FrontDiv>
              <a href={tech.firstTech.href} target="_blank">
                <TechIcon title={tech.firstTech.title} />
              </a>
              <a href={tech.secondTech.href} target="_blank">
                <TechIcon
                  title={tech.secondTech.title}
                  viewBox={tech.secondTech.viewBox}
                />
              </a>
              <a href={tech.firstTech.href} target="_blank">
                <p>{tech.firstTech.title}</p>
              </a>
              <a href={tech.secondTech.href} target="_blank">
                <p>{tech.secondTech.title}</p>
              </a>
            </FrontDiv>

            <BackDiv>
              <a href={tech.thirdTech.href} target="_blank">
                <TechIcon title={tech.thirdTech.title} />
              </a>
              <a href={tech.fourthTech.href} target="_blank">
                <TechIcon title={tech.fourthTech.title} />
              </a>
              <a href={tech.thirdTech.href} target="_blank">
                <p>{tech.thirdTech.title}</p>
              </a>
              <a href={tech.fourthTech.href} target="_blank">
                <p>{tech.fourthTech.title}</p>
              </a>
            </BackDiv>
          </IconsDiv>
        </div>
      </Zoom>
    );
  }
}

export default TechSection;
