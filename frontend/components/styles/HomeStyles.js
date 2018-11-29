import styled from "styled-components";

const HomeStyles = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("../../static/img/whale.jpg") no-repeat center center fixed;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

const Introduction = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: 45vh;
  text-align: center;
  text-transform: uppercase;
  line-height: 1rem;
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
`;

const About = styled.div`
  height: 400px;
  h2 {
    text-align: center;
  }
  p {
    margin-left: 3rem;
    text-align: left;
  }
`;

export { HomeStyles, Introduction, About };
