import styled from "styled-components";

const TechTitle = styled.div`
  z-index: 3;
  width: 100%;
  text-align: center;
  display: block;
  margin-left: 0;
  margin-right: 0;
`;

const IconsDiv = styled.div`
  margin-top: 6rem;
  margin-bottom: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 15rem;
  p {
    text-transform: uppercase;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 2px;
  }
  a {
    &:hover {
      transform: scale(1.02);
      color: orange;
    }
  }
`;

const FrontDiv = styled.div`
  margin-left: 4rem;
  width: 100%;
  grid-column: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 10rem;
`;

const BackDiv = styled.div`
  width: 100%;
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 10rem;
`;

export { TechTitle, IconsDiv, FrontDiv, BackDiv };
