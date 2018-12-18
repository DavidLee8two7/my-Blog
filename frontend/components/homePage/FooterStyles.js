import styled from "styled-components";

const FooterDiv = styled.div`
  z-index: 3;
  grid-row: 8;
  grid-column: 1 / span 4;
  width: 100%;
  justify-items: center;
  align-items: center;
  font-size: 1.8rem;
  background: black;
  box-shadow: ${props => props.theme.bbs};
`;

const Footer = styled.footer`
  z-index: 3;
  width: 100%;
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const FooterNav = styled.div`
  display: inline-block;
  text-align: center;
  ul {
    list-style: none;
  }
  li {
    font-size: 1.8rem;
    display: inline-block;
    margin-right: 2.5rem;
  }
  a {
    color: white;
    &:link,
    &:visited {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      font-weight: 600;
      color: ${props => props.theme.orange};
      box-shadow: 0 1rem 2rem rgba(orange, 0.4);
      transform: translateY(-1rem) rotate(5deg) scale(1.3);
    }
  }
`;

const ContactDiv = styled.div`
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const LogoDiv = styled.div`
  text-align: center;
  width: 25rem;
  transform: scale(1);
  transition: all 0.4s;
  img {
    width: 100%;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.07);
    }
  }
  &:hover img {
    transform: scale(1.07);
  }
`;

const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  a {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: ${props => props.theme.orange};
      box-shadow: 0 1rem 2rem rgba(orange, 0.4);
      transform: translateY(-1rem) rotate(5deg) scale(1.3);
    }
  }
`;

export { FooterDiv, Footer, FooterNav, ContactDiv, LogoDiv, CopyRight };
