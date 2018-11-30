import React, { Component } from "react";
import styled from "styled-components";

const SamplesDiv = styled.div`
  grid-row: 5;
  grid-column: 1 / span 4;
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const Sample = styled.div`
  width: 100%;
  img {
    display: block;
    margin: 0;
    width: 100%;
  }
  p {
    text-align: center;
  }
`;

class ProjectSamples extends Component {
  render() {
    return (
      <SamplesDiv>
        <Sample>
          <a>
            <img src="" alt="one" />
            <p>one</p>
          </a>
        </Sample>
        <Sample>
          <a>
            <img src="" alt="two" />
            <p>two</p>
          </a>
        </Sample>
        <Sample>
          <a>
            <img src="" alt="three" />
            <p>three</p>
          </a>
        </Sample>
      </SamplesDiv>
    );
  }
}

export default ProjectSamples;
