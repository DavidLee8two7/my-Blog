import React, { Component } from "react";
import {
  Experience,
  PictureDiv,
  PictureImg,
  IntroductionDiv,
  ExpList
} from "./ExperienceStyles";

class ExperienceSection extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <div
        style={{
          gridRow: "7",
          gridColumn: "1 / -1",
          width: "100%",
          justifyItems: "center",
          alignItems: "center"
        }}
      >
        <Experience>
          <PictureDiv>
            <PictureImg
              src="/static/img/face.jpeg"
              alt="david lee's picture"
              className="picture"
            />
          </PictureDiv>
          <IntroductionDiv>
            <h4>FULL-STACK WEB DEVELOPER</h4>
            <p>
              I can help the client to create responsive websites that work on a
              wide range of devices Assist with production of clean and
              functional design Bridge communication gap between designers and
              developers Integrate your website into an easy to use content
              management system. I take great care to ensure each project is
              well-documented and easily maintainable so you can enhance a
              website as your company grows.
            </p>
          </IntroductionDiv>
          <ExpList>
            <div>
              <h4>Features</h4>
              <ul>
                <li>Analyze purpose and the users of the website</li>
                <li>Design structure and aesthetics of the project</li>
                <li>Create environment for pleasant user experience</li>
                <li>Easy maintenance and Good Documentation</li>
              </ul>
            </div>
            <div>
              <h4>Accomplishments</h4>
              <ul>
                <ul>
                  <li>Implementation of ERP systems</li>
                  <li>
                    $2 million cost saving in a year for a bakery franchise
                    corp.
                  </li>
                  <li>
                    Productivity increase of 1 ~ 3% for 5 year consecutively for
                    a manufacturing corp.
                  </li>
                </ul>
              </ul>
            </div>
          </ExpList>
        </Experience>
      </div>
    );
  }
}

export default ExperienceSection;
