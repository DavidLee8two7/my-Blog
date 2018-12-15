import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SVGIcon from "../styles/SVGIcon";

const SkillDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
`;

const IconDiv = styled.div`
  width: 100%;
  max-height: 10rem;
  margin: 3rem 2rem;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.orange};
`;

const viewBox = name => {
  switch (name) {
    case "pug":
      return "0 0 478.928 478.928";
    case "apollo client":
      return "0 0 256 256";
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
