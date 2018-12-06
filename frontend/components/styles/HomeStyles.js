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
  margin: 6rem 0;
  padding: 2rem;
  grid-row: 1;
  grid-column: 1 / -1;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.4rem;
  h2 {
    font-family: ${props => props.theme.fontDisplay};
    font-size: 5.4rem;
    letter-spacing: 2px;
    text-shadow: 2px 2px 2px ${props => props.theme.orange};
  }
  .david {
    transform: translateX(-20rem);
  }
  .lee {
    transform: translateX(17rem);
  }
  .messages {
    margin-top: 20rem;
    font-size: 2.4rem;
    font-weight: 400;
    text-shadow: ${props => props.theme.ts};
    border-bottom: 1.5px solid ${props => props.theme.orange};
  }
  @media (max-width: 1200px) {
    border-bottom: none;
    .david {
      transform: translateX(0);
    }
    .jaehoon {
      display: none;
    }
    .lee {
      transform: translateX(0);
    }
  }
  @media (max-width: 650px) {
    p {
      font-size: 2rem;
    }
  }
`;

const GreetingDiv = styled.div`
  z-index: 2;
  grid-row: 2;
  grid-column: 1 / -1;
  margin-bottom: 3rem;
  h2 {
    font-size: 2.8rem;
    text-align: center;
  }
  p {
    font-size: 2.3rem;
    text-align: center;
  }
`;

export { HomeStyles, NameDiv, GreetingDiv };
