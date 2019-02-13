import styled from "styled-components";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    background: none;
    border: 0;
    color: ${props => props.theme.blue};
    font-weight: 600;
    font-size: 1.4em;
    cursor: pointer;
    &:after {
      height: 2px;
      background: ${props => props.theme.blue};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
    transition: all 0.3s ease;
    :hover {
      transform: scale(1.07);
    }
  }
  @media (max-width: 1350px) {
    border-top: 1.5px solid ${props => props.theme.blue};
    width: 100%;
    justify-content: center;
    font-size: 1.2rem;
    a,
    button {
      &:after {
        height: 1px;
        margin-top: 1rem;
      }
    }
  }
  @media screen and (max-width: 950px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 700px) {
    a,
    button {
      padding: 0 1.5rem;
      &:after {
        display: none;
      }
    }
  }
  @media screen and (max-width: 550px) {
    a,
    button {
      padding: 0 1rem;
    }
  }
  @media screen and (max-width: 450px) {
    a,
    button {
      padding: 0 0.7rem;
    }
  }
  @media screen and (max-width: 360px) {
    a,
    button {
      padding: 0 0.6rem;
      font-size: 1.1rem;
    }
  }
`;

export default NavStyles;
