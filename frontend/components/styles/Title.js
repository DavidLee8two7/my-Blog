import styled from "styled-components";

const Title = styled.h3`
  margin: 3rem auto;
  max-width: 100rem;
  text-align: center;
  line-height: 1.3;
  font-size: 4rem;
  transform: skew(-5deg) rotate(-1deg);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.yellow};
`;

export default Title;
