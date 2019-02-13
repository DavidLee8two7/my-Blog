import styled from "styled-components";

const HomeStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("/static/img/galaxy.jpg") no-repeat left top fixed;
  background-size: cover;
  /* @media screen and (max-width: 1300px) {
    background-position-x: -3rem;
  }
  @media screen and (max-width: 1250px) {
    background-position-x: -6rem;
  }
  @media screen and (max-width: 1200px) {
    background-position-x: -9rem;
  }
  @media screen and (max-width: 1150px) {
    background-position-x: -12rem;
  }
  @media screen and (max-width: 1050px) {
    background-position-x: -15rem;
  }
  @media screen and (max-width: 950px) {
    background-position-x: -18rem;
  }
  @media screen and (max-width: 850px) {
    background-position-x: -21rem;
  }
  @media screen and (max-width: 800px) {
    background-position-x: -24rem;
  }
  @media screen and (max-width: 750px) {
    background-position-x: -27rem;
  }
  @media screen and (max-width: 700px) {
    background-position-x: -30rem;
  }
  @media screen and (max-width: 650px) {
    background-position-x: -33rem;
  }
  @media screen and (max-width: 600px) {
    background-position-x: -34rem;
  }
  @media screen and (max-width: 550px) {
    background-position-x: -36rem;
  }
  @media screen and (max-width: 500px) {
    background-position-x: -39rem;
  }
  @media screen and (max-width: 450px) {
    background-position-x: -40rem;
  } */
`;

const NameDiv = styled.div`
  z-index: 2;
  margin: 8rem 0;
  padding: 2rem;
  width: max-content;
  grid-row: 1;
  grid-column: 1 / -1;
  text-align: center;
  line-height: 1.4rem;
  h2 {
    font-family: ${props => props.theme.fontDisplay};
    font-size: 5.4rem;
    letter-spacing: 2px;
    text-shadow: 2px 2px 2px ${props => props.theme.blue};
  }
  .messages {
    margin-top: 12rem;
    font-size: 2.2rem;
    color: black;
    font-weight: 400;
    border-bottom: 1.5px solid ${props => props.theme.blue};
  }
  img {
    max-width: 90rem;
  }
  @media screen and (max-width: 1350px) {
    margin: 4rem 0;
    padding: 1rem;
    img {
      max-width: 75rem;
    }
    .messages {
      margin-top: 4rem;
      font-size: 1.8rem;
      border-bottom: 1.5px solid ${props => props.theme.blue};
    }
  }
  @media screen and (max-width: 950px) {
    margin: 4rem 0;
    padding: 1rem;
    .messages {
      margin-top: 3rem;
      font-size: 1.5rem;
    }
    img {
      max-width: 60rem;
    }
  }
  @media screen and (max-width: 750px) {
    margin: 3rem 0;
    .messages {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 700px) {
    margin: 1rem 0;
    img {
      max-width: 50rem;
    }
    .messages {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 600px) {
    img {
      max-width: 45rem;
    }
    .messages {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 550px) {
    img {
      max-width: 43rem;
    }
    .messages {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      max-width: 40rem;
    }
    .messages {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 450px) {
    margin-top: 2rem;
    img {
      max-width: 37rem;
    }
    .messages {
      display: none;
    }
  }
  @media screen and (max-width: 420px) {
    img {
      max-width: 32rem;
    }
  }
  @media screen and (max-width: 360px) {
    img {
      max-width: 27rem;
    }
  }
`;

const GreetingDiv = styled.div`
  z-index: 2;
  margin-top: 8rem;
  grid-row: 2;
  grid-column: 1 / -1;
  p {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }
  @media screen and (max-width: 1350px) {
    margin: 4rem;
    p {
      font-size: 1.7rem;
      margin: 0;
    }
  }
  @media screen and (max-width: 950px) {
    margin: 2rem;
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 750px) {
    margin: 0.5rem;
    margin-bottom: 2rem;
    padding: 0 2rem;
    p {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 700px) {
    p {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 600px) {
    p {
      display: none;
    }
  }
`;

const TechTitle = styled.div`
  z-index: 2;
  width: 97.5%;
  grid-row: 4;
  text-align: center;
  margin: 0.5rem;
  margin-top: 0;
  display: grid;
  grid-column: 1 / -1;
  box-shadow: ${props => props.theme.sbs};
  transition: all 0.8s ease;
  @media screen and (max-width: 450px) {
    width: 90%;
    box-shadow: none;
    border: 1px solid ${props => props.theme.blue};
  }
`;

export { HomeStyles, NameDiv, GreetingDiv, TechTitle };
