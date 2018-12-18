import styled from "styled-components";

const HomeStyles = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/static/img/whale.jpg") no-repeat center center fixed;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%;
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
    margin-top: 10rem;
    font-size: 2.4rem;
    font-weight: 400;
    text-shadow: ${props => props.theme.ts};
    border-bottom: 1.5px solid ${props => props.theme.orange};
  }
  img {
    max-width: 100rem;
  }
  @media (max-width: 650px) {
    p {
      font-size: 2rem;
    }
  }
`;

const GreetingDiv = styled.div`
  z-index: 2;
  margin-top: 6rem;
  grid-row: 2;
  grid-column: 1 / -1;
  p {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

const TechTitle = styled.div`
  z-index: 3;
  width: 100%;
  text-align: center;
  display: grid;
  grid-column: 1 / -1;
`;

export { HomeStyles, NameDiv, GreetingDiv, TechTitle };
