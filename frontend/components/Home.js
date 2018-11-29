import React, { Component } from "react";
import {
  HomeStyles,
  Introduction,
  About
} from "../components/styles/HomeStyles";

class Home extends Component {
  render() {
    return (
      <HomeStyles>
        <Introduction>
          <div>
            <h2 className="david">David</h2>
            <h2 className="jaehoon">jaehoon</h2>
            <h2 className="lee">Lee</h2>
          </div>
          <div className="greeting">
            <p>I want to help building the better world.</p>
          </div>
        </Introduction>

        <About>
          <h2>About Me</h2>
          <p>
            Get to know me as a person. You can find out about my background,
            experience and more below.
          </p>
        </About>
      </HomeStyles>
    );
  }
}

export default Home;
