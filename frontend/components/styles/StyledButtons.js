import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  min-height: 10rem;
  background: black;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  color: white;
  font-weight: 500;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 2rem;
  display: inline-block;
  transition: all 0.2s;
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background-color: black;
    color: #ff6600;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
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
