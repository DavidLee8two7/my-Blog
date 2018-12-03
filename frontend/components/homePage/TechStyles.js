import styled from "styled-components";

const TechDiv = styled.div`
  z-index: 2;
  grid-row: 4;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  background: ${props => props.theme.offWhite};
`;

const TechTitle = styled.div`
  z-index: 3;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / -1;
  text-align: center;
  border-radius: 3px;
`;

const IconsDiv = styled.div`
  margin: 4rem 0;
  width: 100%;
  grid-row: 2;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
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
  width: 80%;
  grid-column: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 15rem;
`;

const BackDiv = styled.div`
  width: 80%;
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 15rem;
`;

export { TechDiv, TechTitle, IconsDiv, FrontDiv, BackDiv };
