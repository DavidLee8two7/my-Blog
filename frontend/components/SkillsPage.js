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
  SkillsContainer,
  FullStacks,
  SkillCatetory,
  ReactFull,
  NodeFull,
  Title
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
            <SkillsContainer>
              {data.skills.map(skill => (
                <SkillCatetory key={skill.id}>
                  <Title>
                    <a>{skill.title}</a>
                  </Title>
                  <Skill tech={skill.tech} />
                </SkillCatetory>
              ))}
              <FullStacks>
                <ReactFull>
                  <Mutation mutation={TOGGLE_CARD_REACT}>
                    {toggleReact => (
                      <StyledButton
                        onClick={toggleReact}
                        style={{ backgroundColor: "#2164f4" }}
                      >
                        Apollo fullstack
                      </StyledButton>
                    )}
                  </Mutation>
                  <ReactStack />
                </ReactFull>

                <NodeFull>
                  <Mutation mutation={TOGGLE_CARD_NODE}>
                    {toggleNode => (
                      <StyledButton
                        onClick={toggleNode}
                        style={{ backgroundColor: "#green" }}
                      >
                        Node fullstack
                      </StyledButton>
                    )}
                  </Mutation>
                  <NodeStack />
                </NodeFull>
              </FullStacks>
            </SkillsContainer>
          );
        }}
      </Query>
    );
  }
}

export default Skills;
