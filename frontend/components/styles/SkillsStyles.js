import styled from "styled-components";

const TechSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  color: black;
`;

const FullStacks = styled.div`
  padding: 5rem 0 7rem 0;
  grid-row: 1;
  grid-column: 1 /-1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  background-size: cover;
  background-image: linear-gradient(
      to right bottom,
      rgba(225, 225, 225, 0.35),
      rgba(237, 237, 237, 0.9)
    ),
    url(/static/img/whaleJump.jpg);
`;

const TechIntro = styled.div`
  width: 100%;
  margin-left: 1rem;
  text-align: left;
  grid-column: 1 / -1;
  svg text {
    text-transform: uppercase;
    font-style: italic;
    fill: ${props => props.theme.black};
  }
`;

const TechMessage = styled.div`
  width: 100%;
  grid-column: 1 / -1;
  padding: 2rem;
  margin: 2rem 0;
  p {
    font-size: 2.4rem;
    font-weight: 600;
    text-align: left;
    text-shadow: ${props => props.theme.ts};
  }
  span {
    border-bottom: 2px solid ${props => props.theme.orange};
  }
`;

const ReactGraphqlStack = styled.div`
  width: 100%;
  grid-column: 1;
`;

const PugNodeStack = styled.div`
  width: 100%;
  grid-column: 2;
`;

const Title = styled.div`
  width: 20rem;
  margin-left: 3rem;
  h4 {
    min-width: 5rem;
    padding: 2rem;
    text-align: center;
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
  width: 100%;
  margin: 4rem;
  padding: 2rem;
  grid-row: 2;
  grid-column: 1 / -1;
`;

const SkillCatetory = styled.div`
  margin-bottom: 6rem;
  width: 100%;
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
