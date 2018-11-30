import React, { Component } from "react";
import styled from "styled-components";

const ExperienceDiv = styled.div`
  width: 100%;
`;

class Experience extends Component {
  render() {
    return (
      <ExperienceDiv>
        <div>
          <img src="" alt="company logo" />
          <h3>CJ Foods, Inc.</h3>
          <h4>Food-stack software developer</h4>
        </div>
        <div>
          <p>story of work</p>
          <p>duty of work</p>
          <ul>
            <li>i did one</li>
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
