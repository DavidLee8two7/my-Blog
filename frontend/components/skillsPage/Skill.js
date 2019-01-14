import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SkillDiv = styled.div`
  width: 100%;
  margin: 5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
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
  margin: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 13rem;
    height: 13rem;
    padding-bottom: 10px;
  }
  p {
    font-size: 1.8rem;
    font-weight: 600;
  }
  @media screen and (max-width: 1150px) {
    img {
      width: 11rem;
      height: 11rem;
      padding-bottom: 7px;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 1000px) {
    img {
      width: 9rem;
      height: 9rem;
      padding-bottom: 6px;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 900px) {
    margin: 0 3rem;
    img {
      width: 8rem;
      height: 8rem;
      padding-bottom: 5px;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 850px) {
    margin: 0 2rem;
    img {
      width: 5rem;
      height: 5rem;
      padding-bottom: 3px;
    }
  }
  @media screen and (max-width: 700px) {
    img {
      width: 3.5rem;
      height: 3.5rem;
      padding-bottom: 2px;
    }
  }
  @media screen and (max-width: 550px) {
    margin: 0 1rem;
    img {
      width: 3rem;
      height: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 450px) {
    margin: 0 0.3rem;
    img {
      width: 2rem;
      height: 2rem;
      padding-bottom: 1px;
    }
    p {
      font-size: 1rem;
    }
  }
`;

class Skill extends Component {
  static propTypes = {
    resource: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tech: PropTypes.string.isRequired
    })
  };

  render() {
    const { tech } = this.props;
    return (
      <SkillDiv>
        {tech.map(skill => (
          <IconDiv key={skill}>
            <img src={`/static/logo/${skill}.png`} alt={skill} />
            <p>{skill.toUpperCase()}</p>
          </IconDiv>
        ))}
      </SkillDiv>
    );
  }
}

export default Skill;
