import Link from "next/link";
import Nav from "./Nav";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4.2rem;
  font-family: ${props => props.theme.fontDisplay};
  margin-left: 2rem;
  position: relative;
  text-shadow: 0.5px 0.5px 0.5px ${props => props.theme.orange};
  a {
    padding: 0.5rem 1rem;
    color: ${props => props.theme.black};
    text-decoration: none;
    .javascript {
      color: ${props => props.theme.orange};
    }
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyleHeader = styled.header`
  .bar {
    z-index: 5;
    border-bottom: 2px solid ${props => props.theme.orange};
    display: inline-block;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    background: ${props => props.theme.white};
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .short-text {
    display: none;
  }
  @media (max-width: 1300px) {
    .short-text {
      display: inline-block;
    }
    .full-text {
      display: none;
    }
  }
`;

const Header = () => (
  <StyleHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>
            <span className="full-text">
              Full Stack <span className="javascript">JavaScript</span>{" "}
              Developer
            </span>
            <span className="short-text">
              <span className="javascript">JavaScript</span> Developer
            </span>
          </a>
        </Link>
      </Logo>
      <Nav />
    </div>
  </StyleHeader>
);

export default Header;
