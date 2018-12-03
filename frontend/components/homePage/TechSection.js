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
    const { react, apollo, graphql, prisma, visible, invisible } = tech;
    return (
      <TechDiv>
        <TechTitle>
          <a href="/skills">
            <SectionTitle visible={visible.desc} invisible={invisible.desc} />
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
