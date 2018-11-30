import React, { Component } from "react";
import styled from "styled-components";

const ExperienceDiv = styled.div`
  grid-row: 4;
  grid-column: 1 / span 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const TitleDiv = styled.div`
  grid-row: 1;
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  h2 {
    font-size: 2.8rem;
    text-align: center;
  }
  p {
    font-size: 1.8rem;
    margin-left: 3rem;
    text-align: center;
  }
`;

class Experience extends Component {
  render() {
    return (
      <ExperienceDiv>
        <TitleDiv>
          <a href="">
            <img src="/static/CJ.jpeg" alt="company logo" />
          </a>
          <a href="">CJ Foods, Inc.</a>
          <p>Food-stack software developer</p>
        </TitleDiv>
        <div>
          <p>story of work</p>
          <p>duty of work</p>
          <ul>
            <li>lonked</li>
            <li>i did one</li>
            <li>i did one</li>
            <li>i did one</li>
            <li>i did one</li>
          </ul>
          <p>accomplishments</p>
          <ul>
            <li>i did one</li>
            <li>i did one</li>
            <li>i did one</li>
            <li>i did one</li>
            <li>i did one</li>
          </ul>
          <p>period </p>
        </div>
      </ExperienceDiv>
    );
  }
}

export default Experience;
