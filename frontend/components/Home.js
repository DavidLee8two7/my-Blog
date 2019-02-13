import React, { Component } from "react";
import Head from "next/head";
import AboutSection from "./homePage/AboutSection";
import ExperienceSection from "./homePage/ExperienceSection";
import ProjectSection from "./homePage/ProjectSection";
import FlipTitle from "./homePage/TitleSection";
import {
  HomeStyles,
  NameDiv,
  GreetingDiv,
  TechTitle
} from "./styles/HomeStyles";

class Home extends Component {
  render() {
    return (
      <HomeStyles>
        <Head>
          <title>David - Sanbunam.com</title>
        </Head>
        <NameDiv>
          <div>
            <img src="/static/img/myLogo.png" />
          </div>
          <div className="messages">
            <p>
              "Develop a passion for learning. If you do, you will never cease
              to grow." - Anthony J. D'Angelo
            </p>
          </div>
        </NameDiv>
        <GreetingDiv>
          <p>
            Get to know me as a person. You can find out about my background,
            experience and more below.
          </p>
        </GreetingDiv>
        <AboutSection />
        <TechTitle>
          <a href="/skills">
            <FlipTitle
              visible={"Current focus : 💻 React.js  & Node.js"}
              invisible={"More projects and experiences"}
            />
          </a>
        </TechTitle>
        <ProjectSection />
        <ExperienceSection />
      </HomeStyles>
    );
  }
}

export default Home;
