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
  SkillsPage,
  FullStacks,
  TechMessage,
  TechAbout,
  ReactGraphqlStack,
  PugNodeStack,
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
            <SkillsPage>
              <FullStacks>
                <TechMessage>
                  <Title
                    style={{
                      color: `${props => props.theme.black}`,
                      fontSize: "3rem"
                    }}
                  >
                    Skills
                  </Title>
                </TechMessage>
                <TechAbout>
                  I've found out that learning new things and concentration
                  gives me peace(dopamine) I like learning new things...
                </TechAbout>
                <ReactGraphqlStack>
                  <Mutation mutation={TOGGLE_CARD_REACT}>
                    {toggleReact => (
                      <StyledButton
                        onClick={toggleReact}
                        style={{ backgroundColor: "#00d8ff" }}
                      >
                        React & GraphQL Stack
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
                        style={{ backgroundColor: "#215732" }}
                      >
                        Pug(Jade) & Node Stack
                      </StyledButton>
                    )}
                  </Mutation>
                  <NodeStack />
                </PugNodeStack>
              </FullStacks>

              {data.skills.map(skill => (
                <SkillCatetory key={skill.id}>
                  <Title>
                    <a>{skill.title}</a>
                  </Title>
                  <Skill tech={skill.tech} />
                </SkillCatetory>
              ))}
            </SkillsPage>
          );
        }}
      </Query>
    );
  }
}

export default Skills;
