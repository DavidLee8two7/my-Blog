import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ResourceStyles = styled.div`
  width: 30rem;
  display: flex;
  justify-items: center;
  align-items: center;
  img {
    height: 4rem;
    object-fit: cover;
  }
  h5 {
    font-size: 1.8rem;
    font-weight: 500;
  }
  p {
    text-align: left;
    font-size: 1.4rem;
    line-height: 2;
    font-weight: 400;
    flex-grow: 1;
    padding: 0 3rem;
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
        <div>
          {resource.image && (
            <img src={resource.image} alt={resource.subject} />
          )}
          <a href={resource.src} target="_blank">
            <h5>{resource.subject}</h5>
          </a>
          <p>{resource.message}</p>
        </div>
      </ResourceStyles>
    );
  }
}
