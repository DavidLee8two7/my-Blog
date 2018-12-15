import styled from "styled-components";

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/static/img/whaleJump.jpg") no-repeat center center fixed;
  background-size: cover;
`;

const FullStacks = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  background: white;
`;

const ReactFull = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

const NodeFull = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

const Title = styled.h3`
  width: min-content;
  padding: 2rem 6rem;
  margin: 2rem 0 4rem 2rem;
  text-align: center;
  line-height: 1.3;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  transform: skew(-5deg) rotate(-1deg);
  text-transform: uppercase;
  background: ${props => props.theme.lightOrange};
  box-shadow: ${props => props.theme.sbs};
  p {
    font-size: 2.6rem;
  }
  a {
    font-size: 2.4rem;
  }
`;

const SkillCatetory = styled.div`
  width: 70%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
  padding: 1rem;
  background: ${props => props.theme.white};
  border-radius: 3px;
  box-shadow: ${props => props.theme.bbs};
`;

export {
  SkillsContainer,
  FullStacks,
  MyStack,
  ReactFull,
  NodeFull,
  Title,
  SkillCatetory
};
