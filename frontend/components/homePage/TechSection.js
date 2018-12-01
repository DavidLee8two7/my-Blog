import React, { Component } from "react";
import TechIcon from "../styles/TechIcon";
import styled from "styled-components";

const TechDiv = styled.div`
  z-index: 2;
  grid-row: 4;
  grid-column: 1 / span 4;
  width: 75%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  background: linear-gradient(rgba(0, 216, 255, 0.5), rgba(0, 216, 255, 0.5));
`;

const CurrentFocus = styled.div`
  width: 100%;
  grid-row: 1;
  grid-column: 1 / span 4;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

const IconsDiv = styled.div`
  grid-row: 2;
  grid-column: 1 / span 4;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FrontDiv = styled.div`
  width: 100%;
  grid-column: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const BackDiv = styled.div`
  width: 100%;
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const tech = {
  react: {
    title: "react",
    src: "/static/reactstack.png"
  },
  apollo: {
    title: "apollo",
    src: "/static/reactstack.png"
  },
  graphql: {
    title: "graphql",
    src: "/static/reactstack.png"
  },
  prisma: {
    title: "prisma",
    src: "/static/reactstack.png"
  }
};

class TechSection extends Component {
  render() {
    const { react, apollo, graphql, prisma } = tech;
    return (
      <TechDiv>
        <CurrentFocus>
          <p>Currently Focusing on</p>
          <p>React & Apollo Client ↔️ GraphQL Yoga & Prisma</p>
        </CurrentFocus>
        <IconsDiv>
          <FrontDiv>
            <TechIcon title={react.title} src={react.src} />
            <TechIcon title={apollo.title} src={apollo.src} />
          </FrontDiv>
          <BackDiv>
            <TechIcon title={graphql.title} src={graphql.src} />
            <TechIcon title={prisma.title} src={prisma.src} />
          </BackDiv>
        </IconsDiv>
      </TechDiv>
    );
  }
}

export default TechSection;
