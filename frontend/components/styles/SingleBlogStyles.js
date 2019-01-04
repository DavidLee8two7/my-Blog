import styled from "styled-components";

const SingleBlogStyle = styled.div`
  max-width: 1200px;
  min-height: 520px;
  margin: 4rem auto;
  box-shadow: ${props => props.theme.bbs};
  display: grid;
  grid-template-columns: 1fr 2fr;
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

const SingleHerbImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.sbs};
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 3px;
    margin: 1rem 0;
  }
  span {
    text-align: center;
    width: 80%;
    margin-left: 2rem;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    letter-spacing: 0.5px;
    font-family: ${props => props.theme.fontDisplay};
    font-weight: 600;
    border-bottom: 2px solid ${props => props.theme.black};
  }
  @media screen and (max-width: 700px) {
    img {
      width: 70%;
    }
    span {
      margin-left: 1rem;
      font-size: 2rem;
      margin-bottom: 2rem;
      width: 50%;
    }
  }
`;

const SingleHerbDescription = styled.div`
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
export { SingleBlogStyle, SingleHerbImage, SingleHerbDescription };
