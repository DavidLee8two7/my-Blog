import React, { Component } from "react";
import { HomeStyles, TitleDiv, About } from "./homePage/HomeStyles";
import Head from "next/head";
import Intro from "./homePage/Intro";
import Experience from "./homePage/Experience";
import ProjectSamples from "./homePage/ProjectSamples";

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
          <div className="greeting">
            <p>What I don't know is more important than what I know.</p>
          </div>
        </TitleDiv>
        <About>
          <h2>Who Am I?</h2>
          <p>
            Get to know me as a person. You can find out about my background,
            experience and more below.
          </p>
        </About>
        <Intro />
        <Experience />
        <ProjectSamples />
      </HomeStyles>
    );
  }
}

export default Home;
