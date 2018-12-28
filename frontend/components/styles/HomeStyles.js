import styled from "styled-components";

const HomeStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/static/img/whale.jpg") no-repeat center center fixed;
  background-size: cover;
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
    text-shadow: 2px 2px 2px ${props => props.theme.orange};
  }
  .messages {
    margin-top: 12rem;
    font-size: 2.4rem;
    font-weight: 400;
    border-bottom: 1.5px solid ${props => props.theme.orange};
  }
  img {
    max-width: 100rem;
  }
  @media (max-width: 1350px) {
    margin: 4rem 0;
    padding: 1rem;
    img {
      max-width: 60rem;
    }
    .messages {
      margin-top: 4rem;
      font-size: 1.8rem;
      border-bottom: 1.5px solid ${props => props.theme.orange};
    }
  }
  @media (max-width: 950px) {
    margin: 4rem 0;
    padding: 1rem;
    .messages {
      margin-top: 3rem;
      font-size: 1.6rem;
      border-bottom: 1.5px solid ${props => props.theme.orange};
    }
  }
  @media (max-width: 750px) {
    margin: 2rem 0;
    .messages {
      display: none;
    }
  }
  @media (max-width: 700px) {
    margin: 1rem 0;
    img {
      max-width: 40rem;
    }
  }
`;

const GreetingDiv = styled.div`
  z-index: 2;
  margin: 6rem;
  grid-row: 2;
  grid-column: 1 / -1;
  p {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 600;
  }
  @media (max-width: 1350px) {
    margin: 4rem;
    p {
      font-size: 1.9rem;
      margin: 0;
    }
  }
  @media (max-width: 950px) {
    margin: 2rem;
    p {
      font-size: 1.6rem;
    }
  }
`;

const TechTitle = styled.div`
  z-index: 2;
  width: 100%;
  grid-row: 4;
  text-align: center;
  display: grid;
  grid-column: 1 / -1;
`;

export { HomeStyles, NameDiv, GreetingDiv, TechTitle };
