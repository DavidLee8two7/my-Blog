import React, { Component } from "react";
import { OthersDiv, OthersTitle, EducationDiv } from "./OthersStyles";

class OtherSkills extends Component {
  render() {
    return (
      <OthersDiv>
        <OthersTitle>other skills and education</OthersTitle>
        <EducationDiv>
          <h4>Orange County Coding School</h4>
          <ul>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </ul>
        </EducationDiv>
        <EducationDiv>
          <h4>University of Oregon</h4>
          <ul>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </ul>
        </EducationDiv>
      </OthersDiv>
    );
  }
}

export default OtherSkills;
