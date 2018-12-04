import React, { Component } from "react";
import {
  FooterDiv,
  FooterTitle,
  Footer,
  FooterNav,
  LogoDiv,
  CopyRight
} from "./FooterStyles";

class FooterSection extends Component {
  render() {
    return (
      <FooterDiv>
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
            <a href="/contact">
              <span>📞</span>
            </a>
          </LogoDiv>

          <CopyRight>
            <p>
              Copyright &copy; by <a href="/contact">David Lee</a>
            </p>
          </CopyRight>
        </Footer>
      </FooterDiv>
    );
  }
}

export default FooterSection;
