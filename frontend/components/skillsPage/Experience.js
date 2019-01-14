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
            <a href="https://en.wikipedia.org/wiki/CJ_Group" target="_blank">
              <img src="/static/logo/cj.png" />
            </a>
            <a href="https://en.wikipedia.org/wiki/CJ_Group" target="_blank">
              <h3>CJ America, Inc</h3>
            </a>
          </CompanyInfo>
          <JobDescription>
            <h4>ERP system (SAP) specialist</h4>
            <h4>Accomplishments</h4>
            <ul>
              <li>Implementation of ERP system (Beat target by 2 weeks)</li>
              <li>
                Stablized the system on time ( Accurate monthly closing, manuals
                made, power users are trained)
              </li>
              <li>Productivity increase of 1 ~ 3% for 5 years consecutively</li>
              <li>Continues improvement of standard operation procedures</li>
            </ul>
            <h4>2013 - 2016 🗓️ Fullerton, CA</h4>
          </JobDescription>
        </CompanyDiv>
        <CompanyDiv>
          <CompanyInfo>
            <a href="http://eng.paris.co.kr/new/global.html" target="_blank">
              <img src="/static/logo/pb.gif" />
            </a>
            <a href="http://eng.paris.co.kr/new/global.html" target="_blank">
              <h3>Paris Baguette, Inc</h3>
            </a>
          </CompanyInfo>
          <JobDescription>
            <h4>Purchasing strategy specialist (ERP system analysis)</h4>
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
            <h4>2017 - 2018 🗓️ Commerce, CA</h4>
          </JobDescription>
        </CompanyDiv>
      </ExperienceDiv>
    );
  }
}

export default Experience;
