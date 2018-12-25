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
  min-height: 40rem;
  p {
    display: block;
    margin-inline-start: 10rem;
    margin-inline-end: 7rem;
    font-size: 3.4rem;
    font-weight: 600;
    text-align: left;
    text-shadow: ${props => props.theme.ts};
  }
`;

const ResourceMessage = styled.div`
  padding: 3rem;
  width: 100%;
`;

const ResourceList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  background: white;
`;

const Title = styled.div`
  width: 30rem;
  margin: 7rem;
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
`;

export { ResourceDiv, ResourceIntro, ResourceList, Title };
