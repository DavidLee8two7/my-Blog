import styled from "styled-components";

const FooterDiv = styled.footer`
  z-index: 3;
  grid-row: 8;
  grid-column: 1 / span 4;
  padding: 2rem;
  display: grid;
  grid-template-columns: 60% 1fr;
  justify-items: center;
  align-items: center;
  background: white;
  border-top: 2.5px solid ${props => props.theme.blue};
  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content;
    align-items: center;
  }
`;

const LogoDiv = styled.div`
  text-align: center;
  width: 100%;
  transform: scale(1);
  transition: all 0.4s;
  img {
    width: 100%;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.01);
    }
  }
  &:hover img {
    transform: scale(1.01);
  }
  @media screen and (max-width: 900px) {
    img {
      max-height: 386px;
    }
    grid-row: 1;
  }
`;

const ContactDiv = styled.div`
  width: 100%;
  grid-column: 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    grid-row: 2;
    grid-column: 1;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr;
  }
`;

const FooterNav = styled.div`
  display: inline-block;
  text-align: left;
  ul {
    list-style: none;
    li {
      font-size: 2.2rem;
      display: inline-block;
      margin-right: 2.5rem;
    }
  }
  a {
    color: ${props => props.theme.blue};
    &:link,
    &:visited {
      color: ${props => props.theme.blue};
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }
    &:hover,
    &:active {
      transform: translateY(-1rem) rotate(3deg) scale(1.01);
    }
  }
  @media screen and (max-width: 1500px) {
    ul {
      li {
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 1350px) {
    ul {
      li {
        font-size: 1.8rem;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    ul {
      li {
        font-size: 1.6rem;
      }
    }
  }
  @media screen and (max-width: 700px) {
    ul {
      li {
        font-size: 1.4rem;
      }
    }
  }
`;

const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.blue};
  font-size: 2.5rem;
  font-weight: 600;
  a {
    color: ${props => props.theme.blue};
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }
    &:hover,
    &:active {
      transform: translateY(-1rem) rotate(3deg) scale(1.01);
    }
  }
  @media screen and (max-width: 1500px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 1350px) {
    font-size: 1.8rem;
  }
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
`;

export { FooterDiv, FooterNav, ContactDiv, LogoDiv, CopyRight };
