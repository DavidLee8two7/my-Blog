import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  padding: 2rem 0;
  width: 100%;
  color: white;
  background: black;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 2.4rem;
  box-shadow: ${props => props.theme.sbs};
  transition: all 0.3s;
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background-color: black;
    color: #ff6600;
    box-shadow: ${props => props.theme.bbs};
    transform: translateY(-5px);
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
  &:hover {
    background-color: black;
    color: #ff6600;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export { StyledButton, CloseButton };
