import React, { Component } from "react";
import {
  EducationInfo,
  EducationDiv,
  OthersDiv,
  OthersTitle
} from "./OthersStyles";

class OtherSkills extends Component {
  render() {
    return (
      <OthersDiv>
        <OthersTitle>other skills and education</OthersTitle>
        <EducationDiv>
          <EducationInfo>
            <a href="https://www.orangecountycodeschool.com/" target="_blank">
              <img src="/static/logo/occs.png" />
            </a>
            <a href="https://www.orangecountycodeschool.com/" target="_blank">
              <h4>Orange County Coding School</h4>
            </a>
          </EducationInfo>
          <div>
            <h4>
              12 week full stack immersive bootcamp located in Orange County, CA
            </h4>
            <ul>
              <li>
                540+ hours of hands-on coding with industry recognized expert
                instructors
              </li>
              <li>
                The course covers JavaScript, Node.js React, Redux, Angular,
                MongoDB, PostgreSQL, HTML5, and CSS3 while focusing on industry
                best practices and collaboration workflow.
              </li>
            </ul>
          </div>
          <div>
            <span>Feb. 2017 ~ May. 2017 | Newport, CA</span>
          </div>
        </EducationDiv>
        <EducationDiv>
          <EducationInfo>
            <a href="https://www.uoregon.edu/" target="_blank">
              <img src="/static/logo/uoregon.png" />
            </a>
            <a href="https://www.uoregon.edu/" target="_blank">
              <h4>University of Oregon</h4>
            </a>
          </EducationInfo>
          <div>
            <h4>Business Major Marketing Concentration, BS</h4>
            <ul>
              <li>Marketing Research</li>
              <li>Marketing Communications</li>
              <li>Consumer Behavior</li>
              <li>Marketing Strategy</li>
            </ul>
          </div>
        </EducationDiv>
      </OthersDiv>
    );
  }
}

export default OtherSkills;
