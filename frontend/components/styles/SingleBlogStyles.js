import styled from "styled-components";

const SingleBlogStyle = styled.div`
  max-width: 1200px;
  min-height: 520px;
  margin: 4rem auto;
  box-shadow: ${props => props.theme.bbs};
  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  background: ${props => props.theme.offWhite};
  @media screen and (max-width: 1250px) {
    margin: 2rem;
  }
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const SingleBlogDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 5px;
  span {
    margin-left: 2rem;
    font-size: 2rem;
    letter-spacing: 0.5px;
    font-family: ${props => props.theme.fontDisplay};
    font-weight: 600;
  }
  p {
    text-align: left;
    margin-left: 2rem;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 700px) {
    span {
      margin: 1rem 0 0 1rem;
      font-size: 1.5rem;
      letter-spacing: 0.1px;
    }
    p {
      margin-left: 1rem;
      font-size: 1.3rem;
    }
  }
`;
export { SingleBlogStyle, SingleBlogDescription };
