import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import FooterSection from "./homePage/FooterSection";
import Meta from "./Meta";

const theme = {
  blue: "#2164f4", // 33,100,244
  lightBlue: "#00d8ff", // 0,216,255
  lightGray: "#E1E1E1", // 225,225,225
  orange: "#ff6600", // 255,102,0
  lightOrange: "#ffa500", // 255,165,0
  yellow: "#f7df1e", // 247,223,30
  green: "#215732", // 33,87,50
  black: "#393939", // 57,57,57
  white: "#ffffff", // 255,255,255
  offWhite: "#f5f8fa", //
  maxWidth: "100%",
  sbs: "0 1px 1px 1px rgba(126, 126, 126, 0.75)",
  bbs: "0 2px 2px 2px rgba(126, 126, 126, 0.75)",
  ts: "0.15px 0.15px 0.30px rgba(126, 126, 126, 0.75)",
  fontDisplay: "'Playfair Display SC', serif",
  fontPrimary: "'Roboto', sans-serif",
  base: "#ffc600",
  spacing: "10px",
  blur: "10px"
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *: before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: ${theme.fontPrimary};
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <FooterSection />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
