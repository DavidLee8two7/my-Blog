import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ResourceStyles = styled.div`
  width: 70%;
  float: left;
  margin: 4%;
  align-self: start;
  img {
    display: block;
    height: 5rem;
    margin-bottom: 2rem;
    border-style: none;
  }
  h5 {
    color: ${props => props.theme.orange};
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  a {
    background-color: transparent;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.8;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

export default class Resources extends Component {
  static propTypes = {
    resource: PropTypes.object.isRequired
  };

  render() {
    const { resource } = this.props;
    return (
      <ResourceStyles>
        {resource.image && <img src={resource.image} alt={resource.subject} />}
        <a href={resource.src} target="_blank">
          <h5>{resource.subject}</h5>
        </a>
        <p>{resource.message}</p>
      </ResourceStyles>
    );
  }
}
