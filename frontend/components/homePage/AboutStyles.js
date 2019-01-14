import styled from "styled-components";

const IntroDiv = styled.div`
  z-index: 2;
  grid-row: 3;
  grid-column: 1 / -1;
  width: 100%;
  display: grid;
  grid-template-columns: min-content 1fr;
  justify-items: center;
  align-items: start;
  padding: 1rem;
  background: white;
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
  @media screen and (max-width: 1550px) {
    p {
      font-size: 2.2rem;
    }
  }
  @media screen and (max-width: 1450px) {
    p {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 1275px) {
    p {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 1200px) {
    p {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 1050px) {
    display: grid;
    grid-template-columns: 1fr;
    p {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 500px) {
    box-shadow: none;
    background: transparent;
    p {
      font-size: 1.4rem;
    }
  }
`;

const Picture = styled.div`
  width: 100%;
  position: relative;
  img {
    width: 50rem;
    height: 50rem;
  }
  @media screen and (max-width: 1275px) {
    img {
      width: 40rem;
      height: 40rem;
    }
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const AboutDiv = styled.div`
  margin-right: 1rem;
  h2 {
    text-shadow: ${props => props.theme.ts};
  }
  @media screen and (max-width: 550px) {
    h2 {
      font-size: 1.8rem;
    }
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
