import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  padding: 1rem 0;
  width: 100%;
  color: white;
  background: black;
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 6px;
  text-transform: uppercase;
  box-shadow: ${props => props.theme.sbs};
  transition: all 0.3s;
  cursor: pointer;
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    color: #ff6600;
    box-shadow: ${props => props.theme.bbs};
    transform: translateY(-5px);
  }
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: 1.6rem;
    &:hover {
      transform: translateY(-2.5px);
    }
  }
  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const CloseButton = styled.button`
  background: black;
  color: white;
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  cursor: pointer;
  &:hover {
    color: #ff6600;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export { StyledButton, CloseButton };
