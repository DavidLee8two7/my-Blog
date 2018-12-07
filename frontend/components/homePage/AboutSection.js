import React, { Component } from "react";
import { IntroDiv, Picture, AboutDiv, Location } from "./AboutStyles";

class AboutMe extends Component {
  render() {
    return (
      <IntroDiv>
        <Picture>
          <img src="/static/img/couple.jpeg" alt="couple picture" />
          <img className="baby" src="/static/img/son.jpeg" alt="baby picture" />
        </Picture>
        <AboutDiv>
          <h2>About Me 🎎</h2>
          <p>
            Hi, My name is <strong>David Lee</strong>. I'm a web developer based
            in{" "}
            <Location>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Buena+Park,+CA/@33.850486,-118.0580578,10.29z/data=!4m5!3m4!1s0x80dd2bf413605d2b:0xcd9feee5cde8fe25!8m2!3d33.8674044!4d-117.9981387"
              >
                <span className="loc visible"> Buena Park, CA, USA</span>
                <span className="loc invisible"> Show it in Google 🗺️ !</span>
              </a>
            </Location>
          </p>
          <p>
            As a web developer, I enjoy using my obsessive attention to detail,
            my unequivocal love for making things, and my mission-driven work
            ethic to build better future for our children and seniors. I’ve
            always sought out opportunities and challenges that are meaningful
            to me. Although my professional path has taken many twists and turns
            - from ERP system developer, Supply chain management, business
            consulting - I've never stopped engaging my passion to help others
            and solve problems.
          </p>
        </AboutDiv>
      </IntroDiv>
    );
  }
}

export default AboutMe;
