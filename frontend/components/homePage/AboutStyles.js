import styled from "styled-components";

const IntroDiv = styled.div`
  z-index: 2;
  box-shadow: ${props => props.theme.bs};
  grid-row: 3;
  grid-column: 1 / span 4;
  background-color: ${props => props.theme.offWhite};
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
    }
  }
  @media (max-width: 1600px) {
    p {
      font-size: 2rem;
    }
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

const AboutDiv = styled.span`
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

export { IntroDiv, Picture, AboutDiv };
