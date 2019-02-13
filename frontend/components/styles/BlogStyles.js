import styled from "styled-components";

const BlogStyles = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bbs};
  border-radius: 3px;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: start;
  padding: 1px 0 0 1px;
  width: 100%;
  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

const BlogImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  img {
    width: 100%;
    min-width: 13rem;
    height: 25rem;
    object-fit: cover;
    border-radius: 3px;
  }
  span {
    margin-left: 2rem;
    font-size: 2.5rem;
    letter-spacing: 0.5px;
    font-family: ${props => props.theme.fontDisplay};
    font-weight: 600;
    border-bottom: 2px solid ${props => props.theme.black};
  }
  @media screen and (max-width: 700px) {
    span {
      margin-left: 1rem;
      font-size: 2rem;
    }
  }
`;

const BlogTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 3px;
  p {
    text-align: left;
    margin-left: 2rem;
    font-size: 1.6rem;
  }
  @media screen and (max-width: 700px) {
    p {
      margin-left: 1rem;
      font-size: 1.3rem;
    }
  }
`;

export { BlogStyles, BlogImage, BlogTitle };
