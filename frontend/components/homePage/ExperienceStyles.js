import styled from "styled-components";

const Experience = styled.div`
  z-index: 3;
  grid-row: 7;
  grid-column: 1 / -1;
  width: 88%;
  margin: 4rem auto;
  margin-top: 1rem;
  background-color: white;
  border-radius: 3px;
  padding: 7rem;
  transform: skewX(-12deg);
  color: ${props => props.theme.black};
  box-shadow: ${props => props.theme.sbs};
  transition: all 0.8s ease;
  @media (max-width: 1700px) {
    padding: 4rem 7rem;
  }
  @media (max-width: 1600px) {
    width: 85%;
  }
  @media (max-width: 1350px) {
    width: 83%;
  }
  @media (max-width: 1050px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    transform: skewX(0deg);
    width: 97.5%;
    margin: 1rem auto;
    margin-top: 0.5rem;
  }
  @media (max-width: 450px) {
    box-shadow: none;
    background: transparent;
  }
`;

const PictureDiv = styled.div`
  width: 20rem;
  height: 20rem;
  float: left;
  transform: translateX(-2rem) skewX(12deg);
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  img {
    height: 100%;
    backface-visibility: hidden;
    transition: all 0.5s;
    transform: translateX(0.7rem) translateY(2rem) scale(1.2);
  }
  @supports (clip-path: polygon(0 0)) {
    clip-path: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    border-radius: none;
  }
  @media (max-width: 1700px) {
    transform: translateX(-2rem) skewX(12deg);
  }
  @media (max-width: 1375px) {
    width: 18rem;
    height: 18rem;
  }
  @media (max-width: 1250px) {
    width: 17rem;
    height: 17rem;
  }
  @media (max-width: 1000px) {
    width: 15rem;
    height: 15rem;
    transform: translateX(-1rem) skewX(12deg);
  }
  @media (max-width: 900px) {
    width: 14rem;
    height: 14rem;
    transform: translateX(-1rem) skewX(0deg);
  }
  @media (max-width: 750px) {
    width: 13rem;
    height: 13rem;
  }
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
  @media (max-width: 1375px) {
    h4 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 1250px) {
    h4 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 1058px) {
    h4 {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 900px) {
    transform: skewX(0deg);
  }
  @media (max-width: 750px) {
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 500px) {
    h4 {
      font-size: 1.4rem;
    }
  }
`;

const ExpList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
  align-items: start;
  transform: skewX(12deg);
  border-top: 0.7px solid ${props => props.theme.blue};
  font-weight: 400;
  @media (max-width: 1100px) {
    border-top: none;
  }
  @media (max-width: 900px) {
    transform: skewX(0deg);
  }
  .exp {
    transform: skewX(0deg);
    h4 {
      font-size: 2rem;
      text-align: left;
    }
    ul {
      li {
        text-align: left;
        font-size: 1.6rem;
        padding: 0.5rem 0;
        &:not(:last-child) {
          border-bottom: 0.7px solid ${props => props.theme.blue};
        }
      }
    }
    @media (max-width: 1375px) {
      h4 {
        font-size: 2rem;
      }
      ul {
        li {
          font-size: 1.6rem;
        }
      }
    }
    @media (max-width: 1250px) {
      h4 {
        font-size: 1.8rem;
      }
      ul {
        li {
          font-size: 1.4rem;
        }
      }
    }
    @media (max-width: 1100px) {
      ul {
        li {
          &:not(:last-child) {
            border-bottom: none;
          }
        }
      }
    }
    @media (max-width: 1058px) {
      h4 {
        font-size: 1.6rem;
      }
    }
    @media (max-width: 1000px) {
      h4 {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 900px) {
      transform: skewX(0deg);
    }
    @media (max-width: 750px) {
      ul {
        li {
          font-size: 1.3rem;
        }
      }
    }
    @media (max-width: 500px) {
      h4 {
        font-size: 1.4rem;
      }
    }
  }
`;

export { Experience, PictureDiv, IntroductionDiv, ExpList, Skills };
