import styled from "styled-components";

const IconsDiv = styled.div`
  z-index: 2;
  grid-column: 1 / -1;
  justify-self: center;
  padding: 2rem 2rem 0 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 7rem;
  text-align: center;
  transition: all 0.3s;
  p {
    text-transform: uppercase;
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 2px;
  }
  a {
    &:hover {
      transform: scale(1.02);
      color: rgb(255, 102, 0);
    }
  }
  @media screen and (max-width: 1050px) {
    padding: 1.5rem 1.5rem 0 1.5rem;
    grid-column-gap: 5rem;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const FrontDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 7rem;
  @media screen and (max-width: 1000px) {
    grid-column-gap: 5rem;
  }
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

const BackDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 7rem;
  @media screen and (max-width: 1000px) {
    grid-column-gap: 5rem;
  }
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

export { IconsDiv, FrontDiv, BackDiv };
