import styled from "styled-components";

const FooterDiv = styled.div`
  padding: 2rem 0;
  z-index: 2;
  grid-row: 7;
  grid-column: 1 / span 4;
  width: 100%;
  justify-items: center;
  align-items: center;
  background-color: ${props => props.theme.offWhite};
`;

const Footer = styled.footer`
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 3;
  width: 100%;
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
    display: inline-block;
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
  a {
    color: gray;
    &:link,
    &:visited {
      color: ${props => props.theme.black};
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

const LogoDiv = styled.div`
  text-align: center;
  color: ${props => props.theme.black};
  a {
    width: 6.1rem;
    height: 6.1rem;
    display: inline-block;
    overflow: hidden;
    border: 5px solid ${props => props.theme.orange};
    position: relative;
    transform: rotate(0deg);
    transition: transform 0.5s;
    font-weight: 800;
    color: ${props => props.theme.orange};
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0deg);
      transition: transform 0.5s;
    }
    &:hover span {
      transform: translate(-50%, -50%) rotate(90deg);
      transform-origin: center;
      transition: transform 0.5s;
    }
    &:hover {
      transform: rotate(-90deg);
      transition: transform 0.5s;
    }
  }
`;

const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  color: gray;
  a {
    font-size: 1.5rem;
    &:link,
    &:visited {
      color: ${props => props.theme.black};
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

export { FooterDiv, FooterTitle, Footer, FooterNav, LogoDiv, CopyRight };
