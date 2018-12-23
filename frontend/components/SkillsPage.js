import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import Experience from "./skillsPage/Experience";
import { TOGGLE_CARD_REACT } from "./skillsPage/ReactStack";
import { TOGGLE_CARD_NODE } from "./skillsPage/NodeStack";
import gql from "graphql-tag";
import Skill from "./skillsPage/Skill";
import ReactStack from "./skillsPage/ReactStack";
import NodeStack from "./skillsPage/NodeStack";
import { StyledButton } from "./styles/StyledButtons";
import {
  TechSkills,
  FullStacks,
  TechIntro,
  TechMessage,
  ReactGraphqlStack,
  PugNodeStack,
  SkillsDiv,
  Title,
  SkillCatetory
} from "./styles/SkillsStyles";

const ALL_SKILLS_QUERY = gql`
  query ALL_SKILLS_QUERY {
    skills {
      id
      title
      tech
      image
      largeImage
    }
  }
`;

class Skills extends Component {
  render() {
    return (
      <Query query={ALL_SKILLS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <TechSkills>
              <FullStacks>
                <TechIntro>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 20">
                    <text x="0" y="16">
                      Tech Skills
                    </text>
                  </svg>
                </TechIntro>
                <TechMessage>
                  <p>
                    I am JavaScript focused fullstack web developer. Here are
                    some programming languages and tools that I like improving
                    while I'm looking for something new to learn.
                  </p>
                  <p>
                    I like using React, Styled-Component, and GraphQL as my
                    fullstack tools because its ready to build & everything is
                    in JavaScript.
                  </p>
                </TechMessage>
                <ReactGraphqlStack>
                  <Mutation mutation={TOGGLE_CARD_REACT}>
                    {toggleReact => (
                      <StyledButton onClick={toggleReact}>
                        <p>React & GraphQL project sample</p>
                      </StyledButton>
                    )}
                  </Mutation>
                  <ReactStack />
                </ReactGraphqlStack>
                <PugNodeStack>
                  <Mutation mutation={TOGGLE_CARD_NODE}>
                    {toggleNode => (
                      <StyledButton
                        onClick={toggleNode}
                        style={{
                          backgroundColor: "#215732"
                        }}
                      >
                        <p>Pug & Node project sample</p>
                      </StyledButton>
                    )}
                  </Mutation>
                  <NodeStack />
                </PugNodeStack>
              </FullStacks>
              <SkillsDiv>
                {data.skills.map(skill => (
                  <SkillCatetory key={skill.id}>
                    <Title>
                      <h4>
                        <a>{skill.title}</a>
                      </h4>
                    </Title>
                    <Skill tech={skill.tech} />
                  </SkillCatetory>
                ))}
              </SkillsDiv>
              <Experience />
            </TechSkills>
          );
        }}
      </Query>
    );
  }
}

export default Skills;
