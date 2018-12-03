import React, { Component } from "react";
import {
  FooterDiv,
  FooterTitle,
  Footer,
  FooterNav,
  LogoDiv,
  CopyRight
} from "./FooterStyles";
import SectionTitle from "../styles/SectionTitle";

class FooterSection extends Component {
  render() {
    return (
      <FooterDiv>
        <FooterTitle>
          <a href="/contact">
            <SectionTitle
              visible={"footer 📽️"}
              invisible={"You can find more samples by clicking here!"}
            />
          </a>
        </FooterTitle>
        <Footer className="footer">
          <FooterNav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
              <li className="/contact">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </FooterNav>

          <LogoDiv>
            <img src="/static/img/apollo.png" alt="" src="" />
          </LogoDiv>

          <CopyRight>
            <p>
              Hire <a href="/contact">David Lee</a> Copyright &copy; by David
              Lee.
            </p>
          </CopyRight>
        </Footer>
      </FooterDiv>
    );
  }
}

export default FooterSection;
