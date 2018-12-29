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
  background: white;
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
  .loc {
    border-bottom: 1.5px solid ${props => props.theme.orange};
    &:hover,
    &:active {
      color: ${props => props.theme.orange};
      border-bottom: 1.5px solid ${props => props.theme.lightBlue};
    }
  }
  @media (max-width: 1655px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 2.1rem;
      margin-left: 1rem;
    }
  }
  @media (max-width: 1550px) {
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 1500px) {
    p {
      font-size: 1.9rem;
    }
  }
  @media (max-width: 1400px) {
    p {
      font-size: 1.75rem;
    }
  }
  @media (max-width: 1300px) {
    p {
      font-size: 1.65rem;
    }
  }
  @media (max-width: 1250px) {
    p {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 1200px) {
    p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1150px) {
    margin: 0;
    padding: 1rem;
  }
  @media (max-width: 1050px) {
    display: grid;
    grid-template-columns: 1fr;
    p {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 500px) {
    box-shadow: none;
    background: transparent;
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
  @media (max-width: 1655px) {
    width: 90%;
  }
  @media (max-width: 1050px) {
    display: none;
  }
`;

const AboutDiv = styled.div`
  margin-right: 1rem;
  h2 {
    text-shadow: ${props => props.theme.ts};
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
