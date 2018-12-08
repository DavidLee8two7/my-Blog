import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import BlogStyles from "./BlogStyles";

export default class Blog extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired
  };

  render() {
    const { blog } = this.props;
    return (
      <BlogStyles>
        <Link
          href={{
            pathname: "/blogs",
            query: { id: blog.id }
          }}
        >
          <a>{blog.name}</a>
        </Link>
        <p>{blog.subject}</p>
      </BlogStyles>
    );
  }
}
