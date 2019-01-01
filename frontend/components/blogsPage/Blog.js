import React, { Component } from "react";
import PropTypes from "prop-types";
import { BlogStyles, HerbImage, HerbDescription } from "./BlogStyles";

export default class Blog extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired
  };

  render() {
    const { blog } = this.props;
    return (
      <BlogStyles>
        <HerbImage>
          {blog.image && <img src={blog.image} alt={blog.title} />}
          <h4 className="short">{blog.title}</h4>
          <h4 className="long">
            {blog.title}
            <br /> ({blog.subject})
          </h4>
        </HerbImage>

        <HerbDescription>
          <p className="hide">
            <strong>Scientific name:</strong>
            <br />
            {blog.subject}
          </p>
          <p>
            <strong>Medicinal effect :</strong>
            <br />
            {blog.message}
          </p>
        </HerbDescription>
      </BlogStyles>
    );
  }
}
