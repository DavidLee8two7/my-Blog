import React, { Component } from "react";
import Head from "next/head";
import styled from "styled-components";
import SVGIcon from "./styles/SVGIcon";

const SkillDiv = styled.div`
  display: flex;
`;

const IconDiv = styled.div`
  width: 100px;
  height: 80px;
  margin: 15px 30px;
  padding: 5px;
  border-bottom: 1px solid ${props => props.theme.orange};
`;

const SkillsContainer = styled.div`
  margin: 1rem 0;
  text-align: left;
`;

const SkillCatetory = styled.div`
  min-height: 200px;
  margin: 70px 0;
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
`;

const title = ["html", "css", "js", "backend", "tools", "etc"];
const tech = ["github", "external", "react", "graphql", "prisma"];

class SkillsPage extends Component {
  render() {
    return (
      <SkillsContainer>
        <Head>
          <title>David Lee | Experience & Skills</title>
        </Head>

        {title.map(name => (
          <SkillCatetory>
            <div>
              <a>{name}</a>
              {tech.map(each => (
                <SkillDiv>
                  <IconDiv>
                    <SVGIcon name={each} />
                  </IconDiv>
                </SkillDiv>
              ))}
            </div>
          </SkillCatetory>
        ))}
      </SkillsContainer>
    );
  }
}

export default SkillsPage;
