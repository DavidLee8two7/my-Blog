import styled from "styled-components";

const TechSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
`;

const TechContainer = styled.div`
  padding-top: 5rem;
  margin: 0 3rem;
  grid-row: 1;
  grid-column: 1 /-1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  max-width: 1200px;
  @media screen and (max-width: 700px) {
    padding: 0.5rem 1rem;
    margin: 0;
  }
`;

const TechIntro = styled.div`
  width: 100%;
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
  p {
    font-size: 2.4rem;
    font-weight: 600;
    text-align: left;
    text-shadow: ${props => props.theme.ts};
  }
  span {
    border-bottom: 2px solid ${props => props.theme.orange};
  }
  @media screen and (max-width: 1000px) {
    p {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 900px) {
    p {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 800px) {
    p {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 1.4rem;
    }
  }
`;

const Title = styled.div`
  min-width: 20rem;
  margin-left: 3rem;
  h4 {
    padding: 1.5rem;
    text-align: center;
    line-height: 1.3;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    transform: skew(-5deg) rotate(-1deg);
    text-transform: uppercase;
    background: ${props => props.theme.lightOrange};
    box-shadow: ${props => props.theme.sbs};
    font-size: 2rem;
  }
  @media screen and (max-width: 1000px) {
    h4 {
      padding: 1.5rem;
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 900px) {
    min-width: 10rem;
    margin-left: 2rem;
    h4 {
      padding: 1rem;
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 500px) {
    h4 {
      padding: 0;
      font-size: 1.2rem;
    }
  }
`;

const SkillsDiv = styled.div`
  margin: 0 2rem;
  padding: 2rem;
  grid-row: 2;
  grid-column: 1 / -1;
  max-width: 1200px;
`;

const SkillCatetory = styled.div`
  margin-bottom: 5rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
  margin-top: 5rem;
  border-radius: 3px;
  @media screen and (max-width: 1200px) {
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 700px) {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 3rem;
    }
  }
`;

export {
  TechSkills,
  TechContainer,
  TechIntro,
  TechMessage,
  SkillsDiv,
  Title,
  SkillCatetory
};
