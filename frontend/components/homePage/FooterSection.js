import React, { Component } from "react";
import Link from "next/link";
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
                  <Link prefetch href="/index">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/skills">
                    <a>Exp. & Skills</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/resources">
                    <a>Resource</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/blogs">
                    <a>Blogs</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </FooterNav>
            <CopyRight>
              <p>
                Copyright &copy; by{" "}
                <Link prefetch href="/contact">
                  <a>David Lee</a>
                </Link>
              </p>
            </CopyRight>
          </ContactDiv>
        </Footer>
      </FooterDiv>
    );
  }
}

export default FooterSection;
