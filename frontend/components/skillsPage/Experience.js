import React, { Component } from "react";
import {
  ExperienceDiv,
  ExperienceTitle,
  CompanyDiv,
  CompanyIntro
} from "./ExperienceStyles";

class Experience extends Component {
  render() {
    return (
      <ExperienceDiv>
        <ExperienceTitle>Experience</ExperienceTitle>
        <CompanyDiv>
          <CompanyIntro>
            <a href="http://eng.paris.co.kr/new/vision.html" target="_blank">
              <img src="/static/cj.png" />
            </a>
            <a href="http://eng.paris.co.kr/new/vision.html" target="_blank">
              <h4>CJ America, Inc.</h4>
            </a>
          </CompanyIntro>
          <div>
            <h4>
              Job title - SaaS platform that enables enterprise companies to
              build, run, and measure their positive impact campaigns.
            </h4>
            <h4>title here</h4>
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          <div>
            <span>2011 - 2016 | Fullerton, CA</span>
          </div>
        </CompanyDiv>
        <CompanyDiv>
          <CompanyIntro>
            <a href="http://eng.paris.co.kr/new/global.html" target="_blank">
              <img src="/static/pb.gif" />
            </a>
            <a href="http://eng.paris.co.kr/new/global.html" target="_blank">
              <h4>Paris Baguette, Inc.</h4>
            </a>
          </CompanyIntro>
          <div>
            <h4>
              Job title - SaaS platform that enables enterprise companies to
              build, run, and measure their positive impact campaigns.
            </h4>
            <h4>title here</h4>
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          <div>
            <span>2011 - 2016 | Fullerton, CA</span>
          </div>
        </CompanyDiv>
      </ExperienceDiv>
    );
  }
}

export default Experience;
