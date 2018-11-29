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
            <p>I want to help building the better future.</p>
          </div>
        </Introduction>

        <About>
          <h2>About Me</h2>
          <p>
            imsep Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima id dolores consequatur fugit laboriosam, animi aspernatur
            numquam voluptate enim. At, accusantium suscipit voluptate qui
            eligendi optio aut quidem aliquam nam.
          </p>
          <p>
            imsep Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima id dolores consequatur fugit laboriosam, animi aspernatur
            numquam voluptate enim. At, accusantium suscipit voluptate qui
            eligendi optio aut quidem aliquam nam. Minima id dolores consequatur
            fugit laboriosam, animi aspernatur numquam voluptate enim. At,
            accusantium suscipit voluptate qui eligendi optio aut quidem aliquam
            nam.
          </p>
        </About>
      </HomeStyles>
    );
  }
}

export default Home;
