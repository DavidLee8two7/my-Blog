import React, { Component } from "react";
import TechIcon from "../styles/TechIcon";
import styled from "styled-components";

const TechDiv = styled.div`
  z-index: 2;
  grid-row: 4;
  grid-column: 1 / span 4;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  background: linear-gradient(rgba(33, 100, 244, 0.5), rgba(33, 100, 244, 0.5));
`;

const CurrentFocus = styled.div`
  width: 100%;
  grid-row: 1;
  grid-column: 1 / span 4;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  background-color: ${props => props.theme.lightblue};
`;

const IconsDiv = styled.div`
  z-index: 3;
  margin: 5rem auto;
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
  .prisma {
    width: 50%;
  }
`;

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
        <CurrentFocus>
          <a href="/skills">
            <p>
              Current Focus: React & Apollo Client ↔️ GraphQL Yoga & Prisma. you
              can find more tech i like here
            </p>
          </a>
        </CurrentFocus>
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
