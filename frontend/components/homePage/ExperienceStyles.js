import styled from "styled-components";

const ExperienceTitle = styled.div`
  z-index: 3;
  width: 100%;
  text-align: center;
`;

const Experience = styled.div`
  z-index: 3;
  width: 65%;
  margin: 10rem auto;
  background-color: ${props => props.theme.offWhite};
  border-radius: 3px;
  padding: 4rem;
  transform: skewX(-12deg);
  .company__shape {
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
  }

  .company__img {
    height: 100%;
    transform: translateX(-4rem) scale(1.4);
    backface-visibility: hidden;
    transition: all 0.5s;
  }

  .company__text {
    transform: skewX(12deg);
  }

  .company__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: orange;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
    backface-visibility: hidden;
  }

  &:hover .company__caption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover .company__img {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%);
  }
`;

export { ExperienceTitle, Experience };
