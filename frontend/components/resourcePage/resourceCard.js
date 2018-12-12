import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import ResourceStyles from "./resourceStyles";

export default class Resources extends Component {
  static propTypes = {
    resource: PropTypes.object.isRequired
  };

  render() {
    const { resource } = this.props;
    return (
      <ResourceStyles>
        <div>
          {resource.image && <img src={resource.image} alt={resource.title} />}
          <Link
            href={{
              pathname: "/resource",
              query: { id: resource.id }
            }}
          >
            <a>{resource.title}</a>
          </Link>
        </div>
        <div>
          <p>{resource.subject}</p>
          <p>{resource.message}</p>
        </div>
      </ResourceStyles>
    );
  }
}
