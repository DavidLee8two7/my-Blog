import styled from "styled-components";

const BlogStyles = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  border-radius: 3px;
  box-shadow: ${props => props.theme.bbs};
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-items: center;
  align-items: start;
  padding: 2px 5px 0 2px;
  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    border-radius: 3px;
  }
  h4 {
    text-align: center;
    margin-left: 2rem;
    letter-spacing: 0.5px;
    font-size: 1.8rem;
    font-family: ${props => props.theme.fontDisplay};
  }
  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

const HerbImage = styled.div`
  display: flex;
  flex-direction: column;
  .short {
    display: inline;
  }
  .long {
    display: none;
  }
  @media screen and (max-width: 1050px) {
    .short {
      display: none;
    }
    .long {
      display: inline;
    }
  }
  @media screen and (max-width: 700px) {
    .short {
      display: inline;
    }
    .long {
      display: none;
    }
  }
`;

const HerbDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h5 {
    text-align: left;
    margin-left: 2rem;
    letter-spacing: 0.5px;
    font-size: 1.8rem;
  }
  p {
    text-align: left;
    margin-left: 2rem;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1050px) {
    .hide {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    .hide {
      display: inline;
    }
    h5 {
      margin-left: 1rem;
      font-size: 1.6rem;
    }
    p {
      margin-left: 1rem;
      font-size: 1.3rem;
    }
  }
`;

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: ${props => props.theme.orange};
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
`;

export default Title;

export { BlogStyles, HerbImage, HerbDescription, Title };
