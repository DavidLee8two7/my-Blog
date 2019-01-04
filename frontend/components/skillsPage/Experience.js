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
              <img src="/static/cj.png" />
            </a>
            <a href="https://en.wikipedia.org/wiki/CJ_Group" target="_blank">
              <h3>CJ America, Inc</h3>
            </a>
          </CompanyInfo>
          <JobDescription>
            <h4>ERP System(SAP) Specialist</h4>
            <h4>Duties</h4>
            <ul>
              <li>Implementation of SAP R3 ERP system for production teams</li>
              <li>
                Improve standard operation procedure for higher productivity
              </li>
              <li>
                Continues ERP system maintenance (Master, Bill of materials,
                Routing manage and etc)
              </li>
              <li>
                Productivity index anaysis (Yield%, Loss, productivity & COGM)
              </li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>
                Successful implementation by shortening launch date target by 1
                month
              </li>
              <li>Documetationa and training to build power users</li>
              <li>
                Stablelized in 4 month(target was 6 month) by accurately
                performing monthly closing of all trasactions
              </li>
              <li>
                Productivity increase of 1 ~ 3% for 5 year consecutively for
                combine of 3 manufacturing plants
              </li>
            </ul>
            <h4>2013 - 2016 🗓️ Fullerton, CA</h4>
          </JobDescription>
        </CompanyDiv>
        <CompanyDiv>
          <CompanyInfo>
            <a href="http://eng.paris.co.kr/new/global.html" target="_blank">
              <img src="/static/pb.gif" />
            </a>
            <a href="http://eng.paris.co.kr/new/global.html" target="_blank">
              <h3>Paris Baguette, Inc</h3>
            </a>
          </CompanyInfo>
          <JobDescription>
            <h4>Purchasing strategy specialist (& ERP system stablizing)</h4>
            <h4>Duties</h4>
            <ul>
              <li>Support stablizing ERP system for supply chain management</li>
              <li>Consolidation purchasing sources for west and east coast</li>
              <li>Restructure fresh material purchasing routes</li>
              <li>Meet Cost Saving Target $</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>
                Built Data base of all the purchasing related information and
                activities
              </li>
              <li>Restructure purchasing operation procedure</li>
              <li>
                Consolidate and reselect vendors and service providers in USA
              </li>
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
