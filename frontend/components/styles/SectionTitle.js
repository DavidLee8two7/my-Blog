import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  z-index: 3;
  width: 100%;
  position: relative;
  overflow: hidden;
  border: none;
  background: ${props => props.theme.offWhite};
  font-size: 2.6rem;
  font-weight: 400;
  color: ${props => props.theme.black};
  box-shadow: ${props => props.theme.sbs};
  font-family: ${props => props.theme.fontDisplay};
  cursor: pointer;

  & > * {
    display: inline-block;
    height: 100%;
    width: 100%;
    transition: all 0.3s;
  }

  .visible {
    width: 100%;
    padding: 2rem 7.5rem;
  }

  .invisible {
    width: 100%;
    position: absolute;
    padding: 2rem 0;
    left: 0;
    top: -100%;
  }

  &:hover {
    background-image: linear-gradient(
      to left,
      rgb(247, 223, 30),
      rgb(247, 223, 30)
    );
  }
  &:hover .visible {
    transform: translateY(100%);
  }

  &:hover .invisible {
    top: 0;
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
