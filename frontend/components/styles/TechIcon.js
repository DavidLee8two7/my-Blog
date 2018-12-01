import React from "react";
import styled from "styled-components";
import SVGIcon from "../styles/SVGIcon";

const TechDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  color: white;
  p {
    font-size: 2.8rem;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    margin: auto;
    width: 100%;
    height: auto;
    transform: scale(2);
    color: black;
    padding: 5px;
  }
  svg {
  }
`;

const TechIcon = props => {
  return (
    <TechDiv>
      {props.img ? (
        <img src={props.src} alt={props.title} />
      ) : (
        <SVGIcon className="svgIcon" name={props.title} />
      )}
      <p>{props.title}</p>
    </TechDiv>
  );
};

export default TechIcon;
