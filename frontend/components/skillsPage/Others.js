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
            <a href="https://www.orangecountycodeschool.com/" target="_blank">
              <img src="/static/logo/occs.png" />
            </a>
            <a href="https://www.orangecountycodeschool.com/" target="_blank">
              <h3>Orange County Coding Bootcamp</h3>
            </a>
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
            <h4>Feb 2017 ~ May 2017 🗓️ Newport, CA</h4>
          </OthersDescription>
          <EducationInfo>
            <a href="https://www.uoregon.edu/" target="_blank">
              <img src="/static/logo/uoregon.png" />
            </a>
            <a href="https://www.uoregon.edu/" target="_blank">
              <h3>University of Oregon</h3>
            </a>
          </EducationInfo>
          <OthersDescription>
            <h4>Business Major Marketing Concentration</h4>
            <ul>
              <li>Marketing Research</li>
              <li>Marketing Communications</li>
              <li>Consumer Behavior</li>
              <li>Marketing Strategy</li>
            </ul>
            <h4>Other skills</h4>
            <ul>
              <li>Bilingual (Korean & English)</li>
              <li>ERP SAP system (PP & MM modules)</li>
              <li>Microsoft office (Powerpoint, Excel & Word)</li>
              <li>Regularly teach coding to small groups</li>
            </ul>
          </OthersDescription>
        </EducationDiv>
      </OthersDiv>
    );
  }
}

export default OtherSkills;
