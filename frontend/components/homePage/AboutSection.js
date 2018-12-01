import React, { Component } from "react";
import styled from "styled-components";

const IntroDiv = styled.div`
  z-index: 2;
  box-shadow: ${props => props.theme.bs};
  grid-row: 3;
  grid-column: 1 / span 4;
  background-color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: start;
  h2 {
    font-size: 3.2rem;
    text-align: center;
    text-shadow: ${props => props.theme.ts};
  }
  p {
    font-size: 1.8rem;
    margin-left: 3rem;
  }
  span {
    font-weight: bold;
    color: ${props => props.theme.orange};
    border-bottom: 1.5px solid ${props => props.theme.orange};
  }
`;

const Picture = styled.div`
  width: 100%;
  position: relative;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .baby {
    width: 40%;
    position: absolute;
    bottom: 0;
    left: 30%;
    margin-bottom: 1.5rem;
    border-radius: 50%;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <IntroDiv>
        <Picture>
          <img src="/static/img/couple.jpeg" alt="couple picture" />
          <img className="baby" src="/static/img/son.jpeg" alt="baby picture" />
        </Picture>
        <div>
          <h2>About Me</h2>
          <p>
            My name is <span>David Lee</span>. I'm a web developer based in
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Buena+Park,+CA/@33.852734,-118.0418032,13z/data=!3m1!4b1!4m5!3m4!1s0x80dd2bf413605d2b:0xcd9feee5cde8fe25!8m2!3d33.8674044!4d-117.9981387"
            >
              <span> Buena Park, CA, USA</span>
            </a>
          </p>
          <p>
            As a web developer, I enjoy using my obsessive attention to detail,
            my unequivocal love for making things, and my mission-driven work
            ethic to build better future for our kids. I’ve always sought out
            opportunities and challenges that are meaningful to me. Although my
            professional path has taken many twists and turns - from ERP system
            developer, Supply Change Manager for corporations, business
            consulting - I've never stopped engaging my passion to help others
            and solve problems.
          </p>
        </div>
      </IntroDiv>
    );
  }
}

export default AboutMe;
