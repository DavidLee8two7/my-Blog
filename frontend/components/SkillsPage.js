import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import Experience from "./skillsPage/Experience";
import Others from "./skillsPage/Others";
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
                  <TechMessage>
                    <p>
                      Here are some{" "}
                      <span>
                        programming languages and tools that I enjoy using
                      </span>{" "}
                      for my projects but I'm always{" "}
                      <span>looking for something good and new to learn</span>.
                      You can also find some of my previous{" "}
                      <span>experiences</span> listed below.
                    </p>
                  </TechMessage>
                </TechIntro>
                <ReactGraphqlStack>
                  <Mutation mutation={TOGGLE_CARD_REACT}>
                    {toggleReact => (
                      <StyledButton
                        onClick={toggleReact}
                        style={{
                          backgroundColor: "#01579b"
                        }}
                      >
                        <p>React & GraphQL sample</p>
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
                          backgroundColor: "#006064"
                        }}
                      >
                        <p>Pug & Node sample</p>
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
                      <h4>{skill.title}</h4>
                    </Title>
                    <Skill tech={skill.tech} />
                  </SkillCatetory>
                ))}
              </SkillsDiv>
              <Experience />
              <Others />
            </TechSkills>
          );
        }}
      </Query>
    );
  }
}

export default Skills;
