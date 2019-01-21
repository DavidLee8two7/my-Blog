import React, { Component } from "react";
import {
  ExperienceDiv,
  ExperienceTitle,
  CompanyDiv,
  CompanyInfo,
  JobDescription
} from "./ExperienceStyles";

class Experience extends Component {
  render() {
    return (
      <ExperienceDiv>
        <ExperienceTitle>Experiences</ExperienceTitle>
        <CompanyDiv>
          <CompanyInfo>
            <a>
              <img src="/static/logo/cj.png" />
            </a>
            <a>
              <h3>CJ America, Inc</h3>
            </a>
          </CompanyInfo>
          <JobDescription>
            <h4>ERP system specialist</h4>
            <h4>Accomplishments</h4>
            <ul>
              <li>Implementation of ERP system</li>
              <li>Stabilized the system on time</li>
              <li>Productivity increase of 1 ~ 3% for 5 years consecutively</li>
              <li>Continues improvement of standard operations procedure</li>
            </ul>
            <h4>2013 - 2016 in Fullerton, CA</h4>
          </JobDescription>
        </CompanyDiv>
        <CompanyDiv>
          <CompanyInfo>
            <a>
              <img src="/static/logo/pb.gif" />
            </a>
            <a>
              <h3>Paris Baguette, Inc</h3>
            </a>
          </CompanyInfo>
          <JobDescription>
            <h4>System data analyst</h4>
            <h4>Accomplishments</h4>
            <ul>
              <li>
                Built Database of all the purchasing related information and
                activities
              </li>
              <li>Restructure purchasing operation system</li>
              <li>Consolidate vendors and service providers in USA</li>
              <li>$2 million cost saving in year 2018</li>
            </ul>
            <h4>2017 - 2018 in Commerce, CA</h4>
          </JobDescription>
        </CompanyDiv>
      </ExperienceDiv>
    );
  }
}

export default Experience;
