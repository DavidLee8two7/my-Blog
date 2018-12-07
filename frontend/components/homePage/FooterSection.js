import React, { Component } from "react";
import {
  FooterDiv,
  Footer,
  FooterNav,
  ContactDiv,
  LogoDiv,
  CopyRight
} from "./FooterStyles";

class FooterSection extends Component {
  render() {
    return (
      <FooterDiv>
        <Footer className="footer">
          <LogoDiv>
            <a href="/contact">
              <img src="/static/img/myLogo.png" />
            </a>
          </LogoDiv>
          <ContactDiv>
            <FooterNav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/skills">Know-how</a>
                </li>
                <li>
                  <a href="/resource">Resource</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </FooterNav>
            <CopyRight>
              <p>
                Copyright &copy; by <a href="/contact">David Lee</a>
              </p>
            </CopyRight>
          </ContactDiv>
        </Footer>
      </FooterDiv>
    );
  }
}

export default FooterSection;
