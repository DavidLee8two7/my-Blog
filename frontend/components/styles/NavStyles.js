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
    color: white;
    font-weight: 600;
    font-size: 1.4em;
    cursor: pointer;
    @media screen and (max-width: 700px) {
      font-size: 1.4rem;
      padding: 0 1.4rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
      padding: 0 1rem;
    }
    @media screen and (max-width: 350px) {
      padding: 0 0.5rem;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.lightBlue};
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
  }
  @media (max-width: 1350px) {
    border-top: 1.5px solid ${props => props.theme.orange};
    width: 100%;
    justify-content: center;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 500px) {
    border-top: none;
  }
`;

export default NavStyles;
