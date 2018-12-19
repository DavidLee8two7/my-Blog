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
  width: 16rem;
  height: 16rem;
  margin: 1rem 5rem;
  padding: 3rem;
  border-bottom: 1px solid ${props => props.theme.orange};
  p {
    margin-top: 3rem;
    font-size: 1.8rem;
  }
`;

const viewBox = name => {
  switch (name) {
    case "pug(jade)":
      return "0 0 479 479";
    case "apollo client":
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
