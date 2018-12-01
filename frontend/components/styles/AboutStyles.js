import styled from "styled-components";

const IntroDiv = styled.div`
  z-index: 2;
  box-shadow: ${props => props.theme.bs};
  grid-row: 3;
  grid-column: 1 / span 4;
  background-color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: start;
  h2 {
    font-size: 3.2rem;
    text-align: center;
    text-shadow: ${props => props.theme.ts};
  }
  p {
    font-size: 1.8rem;
    margin-left: 3rem;
  }
  span {
    font-weight: bold;
    color: ${props => props.theme.orange};
    border-bottom: 1.5px solid ${props => props.theme.orange};
  }
`;

const Picture = styled.div`
  width: 100%;
  position: relative;
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
`;

export { IntroDiv, Picture };
