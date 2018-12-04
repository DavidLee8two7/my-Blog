import React from "react";
import styled from "styled-components";
import SVGIcon from "../styles/SVGIcon";

const TechDiv = styled.div`
  width: 100%;
  height: auto;
  transition: all 0.3s;
  img {
    width: 100%;
    height: auto;
    color: black;
  }
  &:hover {
    transform: translateY(-1rem) scale(1.02);
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
