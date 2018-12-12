import styled from "styled-components";

const Experience = styled.div`
  z-index: 3;
  width: 80%;
  margin: 8rem auto;
  background-color: ${props => props.theme.white};
  border-radius: 3px;
  padding: 6rem;
  transform: skewX(-12deg);
  box-shadow: ${props => props.theme.sbs};
  h4 {
    width: 100%;
    font-size: 2.6rem;
    font-weight: 600;
    text-align: left;
  }
  .javascript {
    color: ${props => props.theme.orange};
  }
  .react {
    color: ${props => props.theme.blue};
  }
  .experience {
    font-size: 1.6rem;
    font-weight: 400;
  }
  &:hover .caption {
    opacity: 1;
    transform: translate(-50%, -50%) scale(3.5);
  }
`;

const ShapeDiv = styled.div`
  width: 16.5rem;
  height: 16.5rem;
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

const StyledImg = styled.img`
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.5s;
  transform: scale(1.15);
`;

const TextDiv = styled.div`
  transform: skewX(12deg);
`;

const CaptionDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${props => props.theme.orange};
  text-transform: uppercase;
  font-size: 2.7rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.5s;
  backface-visibility: hidden;
  opacity: 0;
  transform: translate(-50%, 20%);
`;

const DetailsDiv = styled.div`
  border-top: 1px solid ${props => props.theme.lightGray};
  display: grid;
  grid-template-columns: 1fr 60%;
  justify-items: start;
  align-items: center;
  transform: skewX(12deg);
  ul {
    width: 100%;
    margin: 0 auto;
    li {
      list-style: none;
      text-align: left;
      font-size: 2rem;
      padding: 0.5rem;
      font-weight: 400;
      &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.lightGray};
      }
    }
  }
`;

export { Experience, ShapeDiv, StyledImg, TextDiv, CaptionDiv, DetailsDiv };
