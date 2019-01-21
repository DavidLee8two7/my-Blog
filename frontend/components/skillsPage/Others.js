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
            <h4>12 week full stack immersive bootcamp in Orange County, CA</h4>
            <ul>
              <li>
                540+ hours of hands-on coding with industry recognized expert
                instructors
              </li>
              <li>
                The course covers JavaScript, Node.js React, Redux, Angular,
                MongoDB, PostgreSQL, HTML5, and CSS3 while focusing on industry
                best practices and collaboration workflow
              </li>
            </ul>
            <h4>Feb 2017 ~ May 2017 in Newport, CA</h4>
          </OthersDescription>
        </EducationDiv>
        <EducationDiv>
          <EducationInfo>
            <img src="/static/logo/uoregon.png" />
            <h3>University of Oregon</h3>
          </EducationInfo>
          <OthersDescription>
            <h4>Business Major Marketing Concentration, BS</h4>
            <ul>
              <li>Marketing Research</li>
              <li>Marketing Communications</li>
              <li>Consumer Behavior</li>
              <li>Marketing Strategy</li>
            </ul>
            <h4>August 2009 ~ August 2013 in Eugene, OR</h4>
          </OthersDescription>
        </EducationDiv>
      </OthersDiv>
    );
  }
}

export default OtherSkills;
