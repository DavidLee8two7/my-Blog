import styled from "styled-components";

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  background: ${props => props.theme.white};
`;

const FullStacks = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  background: ${props => props.theme.white};
  grid-gap: 2rem;
  box-shadow: ${props => props.theme.bbs};
  font-size: 2rem;
`;

const SvgText = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  svg text {
    font-weight: 600;
    font-size: 2rem;
    fill: orange;
  }
`;

const ReactFull = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-items: center;
  align-items: center;
  box-shadow: ${props => props.theme.sbs};
`;

const NodeFull = styled.div`
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
  background: ${props => props.theme.white};
  border-radius: 3px;
  box-shadow: ${props => props.theme.bbs};
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

export {
  SkillsContainer,
  FullStacks,
  SvgText,
  MyStack,
  ReactFull,
  NodeFull,
  Title,
  SkillCatetory
};
