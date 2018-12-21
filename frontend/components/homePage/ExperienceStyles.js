import styled from "styled-components";

const Experience = styled.div`
  color: ${props => props.theme.black};
  z-index: 3;
  width: 80%;
  margin: 8rem auto;
  background-color: white;
  border-radius: 3px;
  padding: 7rem;
  transform: skewX(-12deg);
  box-shadow: ${props => props.theme.sbs};
`;

const PictureDiv = styled.div`
  width: 20rem;
  height: 20rem;
  float: left;
  transform: translateX(-2rem) skewX(12deg);
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  @supports (clip-path: polygon(0 0)) {
    clip-path: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    border-radius: none;
  }
`;

const PictureImg = styled.img`
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.5s;
  transform: scale(1.15);
`;

const IntroductionDiv = styled.div`
  transform: skewX(12deg);
  h4 {
    font-size: 2.2rem;
    font-weight: 600;
    text-align: left;
    text-transform: uppercase;
  }
  p {
    font-size: 1.8rem;
    font-weight: 400;
  }
`;

const ExpList = styled.div`
  display: grid;
  grid-template-columns: 1fr 60%;
  justify-items: start;
  align-items: start;
  transform: skewX(12deg);
  border-top: 0.7px solid ${props => props.theme.lightGray};
  h4 {
    font-size: 2.2rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }
  ul {
    width: 100%;
    margin: 0 auto;
    li {
      list-style: none;
      text-align: left;
      font-size: 1.8rem;
      padding: 0.5rem;
      font-weight: 400;
      &:not(:last-child) {
        border-bottom: 0.7px solid ${props => props.theme.lightGray};
      }
    }
  }
`;

export { Experience, PictureDiv, PictureImg, IntroductionDiv, ExpList };
