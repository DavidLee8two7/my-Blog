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
        <div>
          {blog.image && <img src={blog.image} alt={blog.title} />}
          <Link
            href={{
              pathname: "/blogs",
              query: { id: blog.id }
            }}
          >
            <a>{blog.title}</a>
          </Link>
        </div>

        <div>
          <p>{blog.subject}</p>
          <p>{blog.message}</p>
        </div>
      </BlogStyles>
    );
  }
}
