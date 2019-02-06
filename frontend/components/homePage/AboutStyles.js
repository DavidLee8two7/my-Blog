import styled from "styled-components";

const IntroDiv = styled.div`
  z-index: 2;
  grid-row: 3;
  grid-column: 1 / -1;
  width: 99%;
  display: grid;
  grid-template-columns: 40% 1fr;
  justify-items: center;
  align-items: start;
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  box-shadow: ${props => props.theme.sbs};
  h2 {
    font-size: 3.2rem;
    text-align: center;
    text-shadow: ${props => props.theme.ts};
  }
  p {
    font-size: 2rem;
    margin-left: 3rem;
    text-shadow: ${props => props.theme.ts};
  }
  .loc {
    border-bottom: 1.5px solid ${props => props.theme.orange};
    &:hover,
    &:active {
      color: ${props => props.theme.orange};
      border-bottom: 1.5px solid ${props => props.theme.lightBlue};
    }
  }
  @media screen and (max-width: 1850px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.9rem;
    }
  }
  @media screen and (max-width: 1700px) {
    p {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 1600px) {
    p {
      font-size: 1.75rem;
    }
  }
  @media screen and (max-width: 1550px) {
    p {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 1450px) {
    p {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 1380px) {
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 1300px) {
    p {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 1220px) {
    p {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 1150px) {
    display: grid;
    grid-template-columns: 1fr;
    p {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 900px) {
    p {
      font-size: 1.5rem;
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
  box-shadow: ${props => props.theme.sbs};
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  @media screen and (max-width: 1150px) {
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
