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

const Logo = styled.div`
  margin-left: 2rem;
  position: relative;
  padding: 2rem;
  a {
    color: ${props => props.theme.blue};
    padding: 0.5rem 1rem;
    font-weight: 600;
    font-size: 3.3rem;
    text-decoration: none;
  }
  @media screen and (max-width: 1350px) {
    margin: 0;
    text-align: center;
    a {
      padding: 0.25rem 0;
      font-size: 2.7rem;
      margin: 0.1rem;
      padding: 0.1rem;
    }
  }
  @media screen and (max-width: 950px) {
    a {
      font-size: 2.4rem;
    }
  }
  @media screen and (max-width: 700px) {
    a {
      font-size: 2.2rem;
    }
  }
  @media screen and (max-width: 550px) {
    a {
      padding: 0;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 360px) {
    a {
      font-size: 1.8rem;
    }
  }
`;

const StyleHeader = styled.header`
  .bar {
    z-index: 5;
    border-bottom: 2.5px solid ${props => props.theme.blue};
    display: inline-block;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    background: white;
    @media (max-width: 1350px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => (
  <StyleHeader>
    <div className="bar">
      <Logo>
        <Link href="/contact">
          <a>
            <span>Full-Stack Software Developer</span>
          </a>
        </Link>
      </Logo>
      <Nav />
    </div>
  </StyleHeader>
);

export default Header;
