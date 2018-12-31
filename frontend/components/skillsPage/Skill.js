import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SVGIcon from "../styles/SVGIcon";

const SkillDiv = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    margin: 4rem 0;
  }
  @media screen and (max-width: 800px) {
    margin: 3rem 0;
  }
  @media screen and (max-width: 700px) {
    margin: 2rem 0;
  }
  @media screen and (max-width: 450px) {
    margin: 1rem 0;
  }
`;

const IconDiv = styled.div`
  margin: 0 auto;
  max-height: 100px;
  padding-bottom: 10px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  font-size: 1.8rem;
  font-weight: 600;
  @media screen and (max-width: 900px) {
    max-height: 70px;
    font-size: 1.6rem;
  }
  @media screen and (max-width: 800px) {
    max-height: 60px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 700px) {
    max-height: 50px;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 450px) {
    max-height: 40px;
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const viewBox = name => {
  switch (name) {
    case "pug(jade)":
      return "0 0 400 400";
    case "apollo":
      return "0 0 256 256";
    case "jsx":
      return "0 0 512 512";
    case "styled-components":
      return "0 0 512 512";
    case "material-ui":
      return "0 0 600 476.6";
    default:
      return "0 0 32 32";
  }
};

class Skill extends Component {
  static propTypes = {
    skill: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tech: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired
    })
  };

  render() {
    const { tech } = this.props;
    return (
      <SkillDiv>
        {tech.map(skill => (
          <IconDiv key={skill}>
            <SVGIcon viewBox={viewBox(skill)} name={skill} />
            <p>{skill.toUpperCase()}</p>
          </IconDiv>
        ))}
      </SkillDiv>
    );
  }
}

export default Skill;
