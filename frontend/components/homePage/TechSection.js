import React, { Component } from "react";
import TechIcon from "../styles/TechIcon";
import {
  TechDiv,
  TechTitle,
  IconsDiv,
  FrontDiv,
  BackDiv
} from "../styles/TechStyles";

const tech = {
  react: {
    title: "react",
    src: ""
  },
  apollo: {
    title: "apollo",
    src: "/static/img/apollo.png"
  },
  graphql: {
    title: "graphql",
    src: ""
  },
  prisma: {
    title: "prisma",
    src: ""
  }
};

class TechSection extends Component {
  render() {
    const { react, apollo, graphql, prisma } = tech;
    return (
      <TechDiv>
        <TechTitle>
          <a href="/skills">
            <p>
              Current Focus: React & Apollo Client GraphQL Yoga & Prisma. you
              can find more tech i like here
            </p>
          </a>
        </TechTitle>
        <IconsDiv>
          <FrontDiv>
            <TechIcon title={react.title} src={react.src} />
            <TechIcon img title={apollo.title} src={apollo.src} />
          </FrontDiv>
          <BackDiv>
            <TechIcon title={graphql.title} src={graphql.src} />
            <TechIcon
              className="prisma"
              title={prisma.title}
              src={prisma.src}
            />
          </BackDiv>
        </IconsDiv>
      </TechDiv>
    );
  }
}

export default TechSection;
