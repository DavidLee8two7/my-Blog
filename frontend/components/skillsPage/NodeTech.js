import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import TechIcon from "../styles/TechIcon";
import { IconsDiv, FrontDiv, BackDiv } from "../homePage/TechStyles";

class TechSection extends Component {
  state = {
    show: false
  };

  render() {
    const tech = {
      firstTech: {
        title: "pug",
        src: "",
        viewBox: "",
        href: "https://reactjs.org/"
      },
      secondTech: {
        title: "node js",
        src: "",
        viewBox: "",
        href: "https://www.apollographql.com/docs/?no-cache=1"
      },
      thirdTech: {
        title: "express",
        src: "",
        viewBox: "",
        href: "https://graphql.org/learn/"
      },
      fourthTech: {
        title: "mongodb",
        src: "",
        viewBox: "",
        href: "https://www.prisma.io/"
      }
    };

    return (
      <Zoom
        fraction={0.6}
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
          <IconsDiv>
            <FrontDiv>
              <a href={tech.firstTech.href} target="_blank">
                <TechIcon title={tech.firstTech.title} />
                <p>{tech.firstTech.title}</p>
              </a>
              <a href={tech.secondTech.href} target="_blank">
                <TechIcon title={tech.secondTech.title} />
                <p>{tech.secondTech.title}</p>
              </a>
            </FrontDiv>
            <BackDiv>
              <a href={tech.thirdTech.href} target="_blank">
                <TechIcon title={tech.thirdTech.title} />
                <p>{tech.thirdTech.title}</p>
              </a>
              <a href={tech.fourthTech.href} target="_blank">
                <TechIcon title={tech.fourthTech.title} />
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
