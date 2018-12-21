import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SVGIcon from "../styles/SVGIcon";

const SkillDiv = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: row;
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
