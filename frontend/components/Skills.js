import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Skill from "./skillsPage/Skill";
import ReactStack from "./skillsPage/ReactStack";
import Title from "./styles/Title";
import StyledButton from "./styles/StyledButton";

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

const SkillsContainer = styled.div`
  margin: 40px 0;
  text-align: center;
`;

const SkillCatetory = styled.div`
  min-height: 200px;
  margin: 70px 0;
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
`;

const MyStack = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  width: 100%;
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
              <MyStack>
                <StyledButton style={{ backgroundColor: "#2164f4" }}>
                  Apollo fullstack
                </StyledButton>
                <StyledButton style={{ backgroundColor: "#6cc24a" }}>
                  Pug & Node fullstack
                </StyledButton>
              </MyStack>
              <ReactStack />
              {data.skills.map(skill => (
                <SkillCatetory key={skill.id}>
                  <Title>
                    <a>{skill.title}</a>
                  </Title>
                  <Skill tech={skill.tech} />
                </SkillCatetory>
              ))}
            </SkillsContainer>
          );
        }}
      </Query>
    );
  }
}

export default Skills;
export { ALL_SKILLS_QUERY };
