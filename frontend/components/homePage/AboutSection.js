import React, { Component } from "react";
import IntroDiv from "./AboutStyles";

class AboutMe extends Component {
  render() {
    return (
      <IntroDiv>
        <h2>Welcome to my part of the internet!</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; <strong>Hi, I'm Sanbunam</strong>
          (Orophile: mountain lover), but my friends call me Sanbu or a hermit.
          Hermit is how my friends make fun of me because I spend too much time
          in my house writing codes. For me, I love the mountains because they
          make me feel small. They help me sort out what’s important in life. I
          believe that there is something about the mountains that makes one
          fall in love with them. For some, it’s the vegetation, for some the
          cool air, some like the peace and quiet and others just admire the way
          they stand tall and don’t budge providing guidance and lessons in
          life.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <strong>
            My true love is creating solutions to problems with software.
          </strong>{" "}
          When I take on a project I give daily updates to ensure that the
          project is aligning properly with the client's goals. The end result
          is the right product, delivered on time, and on budget.
        </p>
      </IntroDiv>
    );
  }
}

export default AboutMe;
