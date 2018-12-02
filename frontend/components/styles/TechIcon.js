import React from "react";
import styled from "styled-components";
import SVGIcon from "../styles/SVGIcon";

const TechDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  color: white;
  transition: transform 0.3s;
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
  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
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
