import styled from "styled-components";

const BlogStyles = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  border-radius: 3px;
  box-shadow: ${props => props.theme.bbs};
  display: grid;
  grid-template-columns: 35% 1fr;
  justify-items: center;
  align-items: start;
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: 3px;
  }
  h4 {
    text-align: center;
    font-family: ${props => props.theme.fontDisplay};
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 1.8rem;
  }
  h5 {
    text-align: left;
    letter-spacing: 1px;
    padding: 0 1.3rem;
    font-size: 1.6rem;
  }
  span {
    text-align: left;
    letter-spacing: 1px;
    font-size: 1.5rem;
    font-weight: 0;
  }
`;

export default BlogStyles;
