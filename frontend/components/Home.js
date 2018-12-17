import React, { Component } from "react";
import Head from "next/head";
import {
  HomeStyles,
  NameDiv,
  GreetingDiv,
  TechTitle
} from "./styles/HomeStyles";
import AboutSection from "./homePage/AboutSection";
import TechSection from "./homePage/TechSection";
import ExperienceSection from "./homePage/ExperienceSection";
import ProjectSection from "./homePage/ProjectSection";
import TitleSection from "./homePage/TitleSection";

class Home extends Component {
  render() {
    return (
      <HomeStyles>
        <Head>
          <title>David Lee | JavaScript Dev.</title>
        </Head>
        <NameDiv>
          <div>
            <h2 className="david">David</h2>
            <h2 className="jaehoon">jaehoon</h2>
            <h2 className="lee">Lee</h2>
          </div>
          <div className="messages">
            <p>What We don't know is more important than what We know 📚</p>
          </div>
        </NameDiv>
        <GreetingDiv>
          <h2>How can I help? 😍</h2>
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
              invisible={"Click for more skills and projects."}
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
