import React, { Component } from "react";
import {
  EducationInfo,
  EducationDiv,
  OthersDiv,
  OthersTitle,
  OthersDescription
} from "./OthersStyles";

class OtherSkills extends Component {
  render() {
    return (
      <OthersDiv>
        <OthersTitle>Education & other skills</OthersTitle>
        <EducationDiv>
          <EducationInfo>
            <img src="/static/logo/occs.png" />
            <h3>Orange County Coding Bootcamp</h3>
          </EducationInfo>
          <OthersDescription>
            <h4>16 week full stack immersive bootcamp in Orange County, CA</h4>
            <ul>
              <li>
                The course covers JavaScript, Node.js React, Redux, Angular,
                MongoDB, PostgreSQL, HTML5, and CSS3 while focusing on industry
                best practices and collaboration workflow
              </li>
            </ul>
          </OthersDescription>
        </EducationDiv>
        <EducationDiv>
          <EducationInfo>
            <img src="/static/logo/uoregon.png" />
            <h3>University of Oregon</h3>
          </EducationInfo>
          <OthersDescription>
            <h4>Business Major Marketing Concentration</h4>
            <ul>
              <li>Marketing Research</li>
              <li>Marketing Communications</li>
              <li>Consumer Behavior</li>
              <li>Marketing Strategy</li>
            </ul>
          </OthersDescription>
        </EducationDiv>
      </OthersDiv>
    );
  }
}

export default OtherSkills;
