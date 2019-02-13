import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 100%;
  padding: 1rem 0;
  position: relative;
  overflow: hidden;
  border: none;
  font-size: 2.2rem;
  font-weight: 600;
  background: ${props => props.theme.blue};
  color: black;
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
    padding: 1rem 0;
  }
  .invisible {
    color: black;
    width: 100%;
    position: absolute;
    padding: 1rem 0;
    left: 0;
    top: -100%;
  }
  &:hover .visible {
    transform: translateY(100%);
  }
  &:hover .invisible {
    top: 8px;
  }
  &:focus {
    outline: none;
    animation: pulsate 1s infinite;
  }
  @media screen and (max-width: 1350px) {
    .visible {
      font-size: 2rem;
    }
    .invisible {
      font-size: 2rem;
    }
    &:hover .visible {
      font-size: 2rem;
    }
    &:hover .invisible {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 950px) {
    padding: 0.8rem 0;
    .visible {
      font-size: 1.6rem;
      padding: 0.8rem 0;
    }
    .invisible {
      font-size: 1.6rem;
      padding: 0.8rem 0;
    }
    &:hover .visible {
      font-size: 1.6rem;
      padding: 0.8rem 0;
    }
    &:hover .invisible {
      font-size: 1.6rem;
      padding: 0.8rem 0;
    }
  }
  @media screen and (max-width: 450px) {
    background: transparent;
    .visible {
      font-size: 1.4rem;
      padding: 0.6rem 0;
    }
    .invisible {
      font-size: 1.4rem;
      padding: 0.6rem 0;
    }
    &:hover .visible {
      font-size: 1.4rem;
      padding: 0.6rem 0;
    }
    &:hover .invisible {
      font-size: 1.4rem;
      padding: 0.6rem 0;
    }
  }
`;

const FlipTitle = props => {
  return (
    <StyledBtn>
      <span className="visible">{props.visible}</span>
      <span className="invisible">{props.invisible}</span>
    </StyledBtn>
  );
};

export default FlipTitle;
