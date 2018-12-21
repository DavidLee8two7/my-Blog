import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
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
                  <h4>Tech Skills</h4>
                </TechIntro>

                <TechMessage>
                  <p>
                    I've found out that learning new things and concentration
                    gives me peace(dopamine) I like learning new things...
                  </p>
                </TechMessage>

                <ReactGraphqlStack>
                  <Mutation mutation={TOGGLE_CARD_REACT}>
                    {toggleReact => (
                      <StyledButton
                        onClick={toggleReact}
                        style={{ backgroundColor: "black" }}
                      >
                        <span>React & GraphQL</span>
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
                        Pug & Node
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
            </TechSkills>
          );
        }}
      </Query>
    );
  }
}

export default Skills;
