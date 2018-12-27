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
            <a href="https://en.wikipedia.org/wiki/CJ_Group" target="_blank">
              <img src="/static/cj.png" />
            </a>
            <a href="https://en.wikipedia.org/wiki/CJ_Group" target="_blank">
              <h4>CJ America, Inc.</h4>
            </a>
          </CompanyIntro>
          <div>
            <h4>ERP System Support Manager</h4>
            <h4>Duties</h4>
            <ul>
              <li>Implementation of SAP R3 ERP system for production teams.</li>
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
              <li>successful implementataion</li>
              <li>documetationa nd training building power users</li>
              <li>
                stablelize in 3 month when goal was 6 month for each monthly
                monthly's accuracy and ontime rate
              </li>
              <li>
                Productivity increase of 1 ~ 3% for 5 year consecutively for
                combine of 3 manufacturing plants
              </li>
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
            <h4>Purchasing strategy team manager</h4>
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
                Consolidate and reselect vendors and service proviers in USA
              </li>
              <li>$2 million cost saving in year 2018</li>
            </ul>
          </div>
          <div>
            <span>2016 - 2018 | Commerce, CA</span>
          </div>
        </CompanyDiv>
      </ExperienceDiv>
    );
  }
}

export default Experience;
