import React from "react";
import styled from "styled-components";
import SVGIcon from "../styles/SVGIcon";

const TechDiv = styled.div`
  width: 100%;
  height: auto;
  transition: all 0.3s;
  box-shadow: ${props => props.theme.bbs};
  margin-right: 0;
  margin-left: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-0.5rem) scale(1.02);
  }
`;

const TechIcon = props => {
  return (
    <TechDiv>
      {props.img ? (
        <img src={props.src} alt={props.title} />
      ) : (
        <SVGIcon name={props.title} {...props} />
      )}
    </TechDiv>
  );
};

export default TechIcon;
