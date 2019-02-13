import styled from "styled-components";

const IntroDiv = styled.div`
  z-index: 2;
  grid-row: 3;
  grid-column: 1 / -1;
  width: 97.5%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: start;
  margin: 1rem;
  padding: 1rem;
  background: white;
  box-shadow: ${props => props.theme.sbs};
  transition: all 0.8s ease;
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
  @media screen and (max-width: 950px) {
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 500px) {
    box-shadow: none;
  }
  @media screen and (max-width: 450px) {
    background: transparent;
  }
`;

export default IntroDiv;
