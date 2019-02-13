import React, { Component } from "react";
import {
  Experience,
  PictureDiv,
  IntroductionDiv,
  ExpList,
  Skills
} from "./ExperienceStyles";

class ExperienceSection extends Component {
  render() {
    return (
      <Experience>
        <PictureDiv>
          <img
            src="/static/img/laughing.jpeg"
            alt="david lee's picture"
            className="picture"
          />
        </PictureDiv>
        <IntroductionDiv>
          <h4>I love making people's job eaiser and faster.</h4>
          <p>
            Since writing my first website 10 years ago, I’ve been hooked on web
            technologies and all things digital. In my tenure as a freelancer
            I’ve worked with big companies such as Samsung (CJ Inc), Paris
            Baguette Inc, but prefer the creativity and drive of the startup
            world.
          </p>
        </IntroductionDiv>
        <ExpList>
          <div className="exp">
            <h4>
              Please review my resume, which provides details of projects and
              examples of skills in:
            </h4>
            <ul>
              <li>
                Experience in the full software life cycle using React, Node,
                and GraphQL.
              </li>
              <li>
                Ability to think of creative solutions to complex problems.
              </li>
              <li>
                Used Responsive Web Design so that the web app is compatible
                with different devices like desktops, laptops, tablets, and
                smartphones.
              </li>
              <li>
                Developed REST services in JavaScript Frameworks and have
                developed many unit test cases.
              </li>
              <li>
                Test and track the Issues and Bugs related to software or
                Application.
              </li>
            </ul>
          </div>
        </ExpList>
      </Experience>
    );
  }
}

export default ExperienceSection;
