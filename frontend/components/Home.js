import React, { Component } from "react";
import { HomeStyles, TitleDiv, About } from "./homePage/HomeStyles";
import Intro from "./homePage/Intro";
import ProjectSamples from "./homePage/ProjectSamples";
import Head from "next/head";

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
            <p>I want to help building the better world.</p>
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
        <ProjectSamples />
      </HomeStyles>
    );
  }
}

export default Home;
