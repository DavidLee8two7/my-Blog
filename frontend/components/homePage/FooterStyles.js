import styled from "styled-components";

const FooterDiv = styled.div`
  z-index: 2;
  grid-row: 8;
  grid-column: 1 / span 4;
  width: 100%;
  min-height: 60rem;
  justify-items: center;
  align-items: center;
  background-color: ${props => props.theme.offWhite};
`;

const FooterTitle = styled.div`
  z-index: 3;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / span 4;
  text-align: center;
`;

const Footer = styled.footer`
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 3;
  width: 100%;
`;

const FooterNav = styled.div`
  display: inline-block;
  text-align: center;
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
  a {
    &:link,
    &:visited {
      color: gray;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: white;
      box-shadow: 0 1rem 2rem rgba(black, 0.4);
      transform: rotate(5deg) scale(1.3);
    }
  }
`;

const LogoDiv = styled.div`
  text-align: center;
  img {
    width: 15rem;
    height: auto;
  }
`;

const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  a {
    &:link,
    &:visited {
      color: gray;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: white;
      box-shadow: 0 1rem 2rem rgba(black, 0.4);
      transform: rotate(5deg) scale(1.3);
    }
  }
`;

export { FooterDiv, FooterTitle, Footer, FooterNav, LogoDiv, CopyRight };
