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

const TitleDiv = styled.div`
  display: inline-block;
  margin: 6rem 0;
  grid-row: 1;
  grid-column: 1 / span 4;
  text-align: center;
  text-transform: uppercase;
  line-height: 1rem;
  border-bottom: 1.5px solid ${props => props.theme.orange};
  h2 {
    font-family: ${props => props.theme.fontDisplay};
    font-size: 4.4rem;
  }
  p {
    font-size: 2.8rem;
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
  @media (max-width: 650px) {
    p {
      font-size: 2rem;
    }
  }
`;

const About = styled.div`
  grid-row: 2;
  grid-column: 1 / span 4;
  margin-bottom: 5rem;
  h2 {
    font-size: 2.8rem;
    text-align: center;
  }
  p {
    font-size: 1.8rem;
    margin-left: 3rem;
    text-align: center;
  }
`;

export { HomeStyles, TitleDiv, About };
