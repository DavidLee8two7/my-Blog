import React from "react";
import styled from "styled-components";

const TechDiv = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 15rem;
  }
  p {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }
`;

const TechIcon = props => {
  return (
    <TechDiv>
      <img src={props.src} alt={props.title} />
      <p>{props.title}</p>
    </TechDiv>
  );
};

export default TechIcon;
