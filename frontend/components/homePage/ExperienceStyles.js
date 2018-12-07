import styled from "styled-components";

const Experience = styled.div`
  z-index: 3;
  width: 85%;
  margin: 4rem auto;
  background-color: ${props => props.theme.white};
  border-radius: 3px;
  padding: 6rem;
  transform: skewX(-12deg);
  h4 {
    width: 100%;
    margin-left: 1rem;
    font-size: 1.8rem;
    font-weight: 400;
    text-align: left;
  }
  &:hover .caption {
    opacity: 1;
    transform: translate(-50%, -50%) scale(3.5);
  }
`;

const ExperienceTitle = styled.div`
  width: 100%;
`;

const ShapeDiv = styled.div`
  width: 15rem;
  height: 15rem;
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
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
  transform: skewX(12deg);
  h4 {
    width: 100%;
    margin-left: 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
  }
  ul {
    width: 100%;
    margin: 0 auto;
    li {
      text-align: left;
      font-size: 1.5rem;
      padding: 0.5rem;
      &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.lightGray};
      }
    }
  }
`;

export {
  Experience,
  ExperienceTitle,
  ShapeDiv,
  StyledImg,
  TextDiv,
  CaptionDiv,
  DetailsDiv
};
