import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 100%;
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 0.3rem;
  background-image: linear-gradient(to right, #f7df1e, #f7df1e);
  font-size: 3rem;
  font-weight: 600;
  color: black;
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
    background-image: linear-gradient(to left, #f7df1e, #f7df1e);
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
