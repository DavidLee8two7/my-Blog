import React, { Component } from "react";
import Head from "next/head";
import { HomeStyles, TitleDiv, Who } from "./styles/HomeStyles";
import AboutSection from "./homePage/AboutSection";
import TechSection from "./homePage/TechSection";
import ExperienceSection from "./homePage/ExperienceSection";
import ProjectSection from "./homePage/ProjectSection";
import FooterSection from "./homePage/FooterSection";

class Home extends Component {
  render() {
    return (
      <HomeStyles>
        <Head>
          <title>David Lee | JavaScript Dev.</title>
        </Head>
        <TitleDiv>
          <div>
            <h2 className="david">David</h2>
            <h2 className="jaehoon">jaehoon</h2>
            <h2 className="lee">Lee</h2>
          </div>
          <div className="messages">
            <p>What We don't know is more important than what We know.</p>
          </div>
        </TitleDiv>
        <Who>
          <h2>How can I help? 😍 I love Coding!</h2>
          <p>
            Get to know me as a person. You can find out about my background,
            experience and more below.
          </p>
        </Who>
        <AboutSection />
        <TechSection />
        <ProjectSection />
        <ExperienceSection />
        <FooterSection />
      </HomeStyles>
    );
  }
}

export default Home;
