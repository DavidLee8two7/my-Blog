import React, { Component } from "react";
import Head from "next/head";
import AboutSection from "./homePage/AboutSection";
import TechSection from "./homePage/TechSection";
import ExperienceSection from "./homePage/ExperienceSection";
import ProjectSection from "./homePage/ProjectSection";
import TitleSection from "./homePage/TitleSection";
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
          <title>David Lee | JavaScript Dev.</title>
        </Head>
        <NameDiv>
          <div>
            <img src="/static/img/myLogo.png" />
          </div>
          <div className="messages">
            <p>
              The purpose of life is finding the largest burden that you can
              bear and bearing it.
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
            <TitleSection
              visible={"Current focus : 💻 React & GraphQL stack"}
              invisible={"Click for more skills and projects"}
            />
          </a>
        </TechTitle>
        <TechSection />
        <ProjectSection />
        <ExperienceSection />
      </HomeStyles>
    );
  }
}

export default Home;
