import React, { Component } from "react";
import { IntroDiv, Picture, AboutDiv, Location } from "./AboutStyles";

class AboutMe extends Component {
  render() {
    return (
      <IntroDiv>
        <Picture>
          <img src="/static/img/couple.jpeg" alt="couple picture" />
        </Picture>
        <AboutDiv>
          <h2>About Me</h2>
          <p>
            Hi, My name is <strong>David Lee</strong>. I'm a web developer based
            in{" "}
            <Location>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Buena+Park,+CA/@33.850486,-118.0580578,10.29z/data=!4m5!3m4!1s0x80dd2bf413605d2b:0xcd9feee5cde8fe25!8m2!3d33.8674044!4d-117.9981387"
              >
                <span className="loc visible"> Buena Park, CA.</span>
                <span className="loc invisible"> Show it in Google 🗺️ !</span>
              </a>
            </Location>
          </p>
          <p>
            A few years ago, I discovered my passion for web development, and I
            decided to begin my transition into this new and exciting field.
            After leaving my job of 5 years as a good performing ERP system
            manager / Business Data analyst. The change in direction was
            challenging, however, I knew that my drive to be in this field would
            only grow because it combines being able to tap into my creative
            side while also utilizing my love for problem-solving.
          </p>
          <p>
            I now only focus on being a web developer but my knowledge of
            multiple fields allows me to work on a project with the full scope
            in mind; simplifying the process of our working together and
            producing a more cohesive experience for your users.
          </p>
        </AboutDiv>
      </IntroDiv>
    );
  }
}

export default AboutMe;
