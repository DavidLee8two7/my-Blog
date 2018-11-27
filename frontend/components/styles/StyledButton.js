import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  background: black;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  transform: skew(-7deg);
  font-size: 2rem;
  margin: 1px;
  display: inline-block;
  transition: all 0.2s;
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background-color: black;
    color: #ff6600;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export default StyledButton;
