import styled from "styled-components";

const ContactDiv = styled.div`
  z-index: 2;
  grid-row: 7;
  grid-column: 1 / span 4;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

const ContactTitle = styled.div`
  z-index: 3;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / span 4;
  text-align: center;
`;

const Contact = styled.div`
  z-index: 3;
  width: 85%;
  height: 50vh;
  margin: 6rem auto;
  background-color: ${props => props.theme.offWhite};
  border-radius: 3px;
  padding: 4rem;
  .company__shape {
    width: 15rem;
    height: 15rem;
    float: left;
    transform: translateX(-2rem);
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
    transform: scale(1.4);
    backface-visibility: hidden;
    transition: all 0.5s;
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

export { ContactDiv, ContactTitle, Contact };
