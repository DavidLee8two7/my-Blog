import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ResourceStyles = styled.div`
  width: 80%;
  float: left;
  margin: 5%;
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
  @media screen and (max-width: 900px) {
    margin: 3%;
    img {
      height: 4rem;
      margin-bottom: 1rem;
    }
    h5 {
      font-size: 1em;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 500px) {
    margin: 1%;
    img {
      height: 3rem;
      margin-bottom: 0.3rem;
    }
    h5 {
      font-size: 0.7em;
    }
    p {
      display: none;
    }
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
