import React, { Component } from "react";
import TechIcon from "../styles/TechIcon";
import SectionTitle from "../styles/SectionTitle";
import { TechDiv, TechTitle, IconsDiv, FrontDiv, BackDiv } from "./TechStyles";

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

class TechSection extends Component {
  render() {
    const {
      firstTech,
      secondTech,
      thirdTech,
      fourthTech,
      visible,
      invisible
    } = tech;
    return (
      <TechDiv>
        <TechTitle>
          <a href="/skills">
            <SectionTitle visible={visible.desc} invisible={invisible.desc} />
          </a>
        </TechTitle>
        <IconsDiv>
          <FrontDiv>
            <a href={firstTech.href} target="_blank">
              <TechIcon title={firstTech.title} />
            </a>
            <a href={secondTech.href} target="_blank">
              <TechIcon title={secondTech.title} viewBox={secondTech.viewBox} />
            </a>
            <a href={firstTech.href} target="_blank">
              <p>{firstTech.title}</p>
            </a>
            <a href={secondTech.href} target="_blank">
              <p>{secondTech.title}</p>
            </a>
          </FrontDiv>

          <BackDiv>
            <a href={thirdTech.href} target="_blank">
              <TechIcon title={thirdTech.title} />
            </a>
            <a href={fourthTech.href} target="_blank">
              <TechIcon title={fourthTech.title} />
            </a>
            <a href={thirdTech.href} target="_blank">
              <p>{thirdTech.title}</p>
            </a>
            <a href={fourthTech.href} target="_blank">
              <p>{fourthTech.title}</p>
            </a>
          </BackDiv>
        </IconsDiv>
      </TechDiv>
    );
  }
}

export default TechSection;
