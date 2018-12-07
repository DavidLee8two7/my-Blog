import styled from "styled-components";

const TechTitle = styled.div`
  width: 100%;
  text-align: center;
  display: block;
  margin-left: 0;
  margin-right: 0;
`;

const IconsDiv = styled.div`
  padding: 4rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 15rem;
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
      color: rgb(247, 223, 30);
    }
  }
`;

const FrontDiv = styled.div`
  margin-left: 3rem;
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
