import React, { Component } from "react";
import styled from "styled-components";

const IntroDiv = styled.div`
  grid-row: 3;
  grid-column: 1 / span 4;
  background-color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  h2 {
    font-size: 3.2rem;
    text-align: center;
  }
  p {
    font-size: 1.8rem;
    margin-left: 3rem;
    text-align: left;
  }
  span {
    font-weight: bold;
    color: ${props => props.theme.orange};
    border-bottom: 1.5px solid ${props => props.theme.orange};
  }
`;

const Picture = styled.div`
  width: 100%;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

class Intro extends Component {
  render() {
    return (
      <IntroDiv>
        <Picture>
          <div>
            <img className="top" src="/static/img/couple.jpeg" alt="picture" />
          </div>
        </Picture>
        <div>
          <h2>About Me</h2>
          <p>
            My name's Jaehoon Lee. I'm a web designer and developer based in
            <span> California, USA</span>.
          </p>
          <p>
            Be smart here. tell them how smart you are. good personality that
            they can enjoy and make them to like you. I'm a married person i
            have baby and enjoy mylife.
          </p>
        </div>
      </IntroDiv>
    );
  }
}

export default Intro;
