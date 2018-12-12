import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  z-index: 3;
  width: 100%;
  padding: 1rem 0;
  position: relative;
  overflow: hidden;
  border: none;
  font-size: 2.8rem;
  font-weight: 600;
  background: black;
  color: ${props => props.theme.orange};
  box-shadow: ${props => props.theme.sbs};
  font-family: ${props => props.theme.fontDisplay};
  text-transform: uppercase;
  cursor: pointer;
  & > * {
    display: inline-block;
    height: 100%;
    width: 100%;
    transition: all 0.3s;
  }
  .visible {
    width: 100%;
    padding: 2rem 0;
  }
  .invisible {
    width: 100%;
    position: absolute;
    padding: 2rem 0;
    left: 0;
    top: -100%;
  }
  &:hover .visible {
    transform: translateY(100%);
  }
  &:hover .invisible {
    top: 8.5px;
  }
  &:focus {
    outline: none;
    animation: pulsate 1s infinite;
  }
`;

const SectionTitle = props => {
  return (
    <StyledBtn>
      <span className="visible">{props.visible}</span>
      <span className="invisible">{props.invisible}</span>
    </StyledBtn>
  );
};

export default SectionTitle;
