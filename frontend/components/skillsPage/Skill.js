import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { consolidateStreamedStyles } from "styled-components";
import SVGIcon from "../../static/SVGIcon";

const SkillDiv = styled.div`
  display: flex;
`;

const IconDiv = styled.div`
  width: 100px;
  height: 80px;
  margin: 15px 30px;
  padding: 5px;
  border-bottom: 1px solid ${props => props.theme.orange};
`;

class Skill extends Component {
  static propTypes = {
    skill: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
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
            <SVGIcon name={skill} />
            <p>{skill.toUpperCase()}</p>
          </IconDiv>
        ))}
      </SkillDiv>
    );
  }
}

export default Skill;
