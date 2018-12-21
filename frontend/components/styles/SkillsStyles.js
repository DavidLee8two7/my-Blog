import styled from "styled-components";

const TechSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("/static/img/working_pic.jpg") no-repeat center center fixed;
  background-size: cover;
`;

const FullStacks = styled.div`
  margin: 6rem;
  padding: 2rem;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / -1;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  box-shadow: ${props => props.theme.bbs};
`;

const TechIntro = styled.div`
  width: 100%;
  margin-left: 1rem;
  text-align: left;
  grid-column: 1 / span 2;
  h4 {
    font-family: ${props => props.theme.fontDisplay};
    font-size: 3.2rem;
    font-weight: 600;
  }
`;

const TechMessage = styled.div`
  width: 95%;
  grid-column: 1 / -1;
  p {
    font-size: 2rem;
    text-align: left;
  }
`;

const ReactGraphqlStack = styled.div`
  width: 100%;
  grid-column: 1 / 3;
  & > * {
    cursor: pointer;
  }
`;

const PugNodeStack = styled.div`
  width: 100%;
  grid-column: 3 / -1;
  & > * {
    cursor: pointer;
  }
`;

const Title = styled.div`
  width: 30%;
  margin-left: 3rem;
  h4 {
    min-width: 5rem;
    padding: 2rem;
    text-align: left;
    line-height: 1.3;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    transform: skew(-5deg) rotate(-1deg);
    text-transform: uppercase;
    background: ${props => props.theme.lightOrange};
    box-shadow: ${props => props.theme.sbs};
    p {
      font-size: 2rem;
    }
    a {
      font-size: 2rem;
    }
  }
`;

const SkillsDiv = styled.div`
  grid-row: 2;
  grid-column: 1 / -1;
  align-content: start;
`;

const SkillCatetory = styled.div`
  width: 100%;
  min-height: 370px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
  margin-top: 5rem;
  border-radius: 3px;
`;

export {
  TechSkills,
  FullStacks,
  TechIntro,
  TechMessage,
  ReactGraphqlStack,
  PugNodeStack,
  SkillsDiv,
  Title,
  SkillCatetory
};
