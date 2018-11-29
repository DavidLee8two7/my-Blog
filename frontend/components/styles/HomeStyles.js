import styled from "styled-components";

const HomeStyles = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.7)
    ),
    url("../../static/img/whale.jpg") no-repeat center center fixed;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

const Introduction = styled.div`
  display: inline-block;
  margin: 4rem 0;
  grid-row: 1;
  grid-column: 1 / 3;
  text-align: center;
  text-transform: uppercase;
  line-height: 1rem;
  border-bottom: 1.5px solid ${props => props.theme.orange};
  h2 {
    font-family: ${props => props.theme.fontDisplay};
    font-size: 3.6rem;
  }
  p {
    font-size: 2.2rem;
    font-weight: 500;
  }
  .david {
    transform: translateX(-18rem);
  }
  .lee {
    transform: translateX(15rem);
  }
  .greeting {
    margin-top: 10rem;
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
  @media (max-width: 550px) {
    p {
      font-size: 1.8rem;
    }
  }
`;

const About = styled.div`
  grid-row: 2;
  grid-column: 1 / 3;
  h2 {
    font-size: 2.2rem;
    text-align: center;
  }
  p {
    margin-left: 3rem;
    text-align: center;
  }
`;

export { HomeStyles, Introduction, About };
