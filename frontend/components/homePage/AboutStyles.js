import styled from "styled-components";

const IntroDiv = styled.div`
  z-index: 2;
  grid-row: 3;
  grid-column: 1 / -1;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 1fr;
  justify-items: center;
  align-items: start;
  margin-top: 1rem;
  padding: 2rem;
  background: ${props => props.theme.white};
  box-shadow: ${props => props.theme.sbs};
  h2 {
    font-size: 3.2rem;
    text-align: center;
    text-shadow: ${props => props.theme.ts};
  }
  p {
    font-size: 2.4rem;
    margin-left: 3rem;
  }
  span {
    font-weight: bold;
  }
  .loc {
    border-bottom: 1.5px solid ${props => props.theme.orange};
    &:hover,
    &:active {
      color: ${props => props.theme.orange};
      border-bottom: 1.5px solid ${props => props.theme.lightBlue};
    }
  }
  @media (max-width: 1600px) {
    h2 {
      font-size: 2.8rem;
    }
    p {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 1500px) {
    h2 {
      font-size: 2.6rem;
    }
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 1350px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 1200px) {
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Picture = styled.div`
  width: 100%;
  position: relative;
  box-shadow: ${props => props.theme.sbs};
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .baby {
    width: 40%;
    position: absolute;
    bottom: 0;
    left: 30%;
    margin-bottom: 1.5rem;
    border-radius: 50%;
  }
  @media (max-width: 700px) {
    width: 50%;
  }
`;

const AboutDiv = styled.div`
  margin-right: 1rem;
  h2 {
    text-shadow: ${props => props.theme.ts};
  }
  @media (max-width: 700px) {
    width: 70%;
  }
`;

const Location = styled.span`
  display: inline-block;
  .visible {
    display: inline-block;
  }
  .invisible {
    display: none;
  }
  &:hover .visible {
    display: none;
  }
  &:hover .invisible {
    display: inline-block;
  }
`;

export { IntroDiv, Picture, AboutDiv, Location };
