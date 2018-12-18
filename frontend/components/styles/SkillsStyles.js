import styled from "styled-components";

const SkillsPage = styled.div`
  margin: 6rem 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  background: ${props => props.theme.white};
`;

const FullStacks = styled.div`
  padding: 2rem;
  width: 85%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  background: ${props => props.theme.white};
  box-shadow: ${props => props.theme.bbs};
  font-size: 2rem;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/static/plaid.jpg");
`;

const TechMessage = styled.div`
  width: 100%;
  font-size: 2.4rem;
  font-weight: 400;
`;

const TechAbout = styled.div`
  width: 100%;
  font-size: 1.4rem;
  text-align: left;
`;

const ReactGraphqlStack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-items: center;
  align-items: center;
  box-shadow: ${props => props.theme.sbs};
`;

const PugNodeStack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-items: center;
  align-items: center;
  box-shadow: ${props => props.theme.sbs};
`;

const SkillCatetory = styled.div`
  width: 70%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bbs};
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/static/plaid.jpg");
`;

const Title = styled.h3`
  width: max-content;
  padding: 2rem;
  margin: 2rem 0 4rem 2rem;
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
`;

export {
  SkillsPage,
  FullStacks,
  TechMessage,
  TechAbout,
  ReactGraphqlStack,
  PugNodeStack,
  Title,
  SkillCatetory
};
