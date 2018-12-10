import React, { Component } from "react";
import styled from "styled-components";
import SVGIcon from "../styles/SVGIcon";

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
  render() {
    console.log(this.props);
    return (
      <SkillDiv>
        <IconDiv>
          <SVGIcon name={this.props.tech} />
        </IconDiv>
      </SkillDiv>
    );
  }
}

export default Skill;
