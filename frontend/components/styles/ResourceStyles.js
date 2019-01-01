import styled from "styled-components";

const ResourceDiv = styled.div`
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("/static/img/working_pic.jpg") no-repeat center center fixed;
  background-size: cover;
  h1 {
    padding: 3rem;
    text-align: center;
  }
  svg text {
    text-transform: uppercase;
    font-style: italic;
    fill: ${props => props.theme.black};
  }
`;

const ResourceIntro = styled.div`
  padding: 10rem 0;
  width: 100%;
  p {
    display: block;
    margin-inline-start: 10rem;
    margin-inline-end: 7rem;
    font-size: 2.4rem;
    font-weight: 600;
    text-align: left;
    text-shadow: ${props => props.theme.ts};
  }
  @media screen and (max-width: 1000px) {
    padding: 2rem;
    p {
      font-size: 2rem;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
  }
  @media screen and (max-width: 900px) {
    p {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 800px) {
    p {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    p {
      font-weight: 400;
      font-size: 1.3rem;
    }
  }
`;

const ResourceList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  background: white;
`;

const Title = styled.div`
  min-width: 20rem;
  margin-left: 3rem;
  h4 {
    width: max-content;
    padding: 2rem;
    text-align: center;
    line-height: 1.3;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    transform: skew(-5deg) rotate(-1deg);
    text-transform: uppercase;
    background: ${props => props.theme.lightOrange};
    box-shadow: ${props => props.theme.sbs};
    font-size: 2rem;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 2rem;
    h4 {
      padding: 1.5rem;
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 800px) {
    margin-left: 1.5rem;
    h4 {
      padding: 1rem;
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 700px) {
    margin-left: 1rem;
    h4 {
      padding: 0.5rem;
      font-size: 1.4rem;
    }
  }
`;

export { ResourceDiv, ResourceIntro, ResourceList, Title };
