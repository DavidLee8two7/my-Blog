import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { BlogStyles, BlogImage, BlogTitle } from "./styles/BlogStyles";

class Blog extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired
  };

  render() {
    const { blog } = this.props;
    return (
      <BlogStyles>
        <BlogImage>
          <Link
            href={{
              pathname: "/blog",
              query: { id: blog.id }
            }}
          >
            <a>
              {blog.image && <img src={blog.image} alt={blog.title} />}
              <span>{blog.title}</span>
            </a>
          </Link>
        </BlogImage>
        <BlogTitle>
          <p>
            <strong>Title: </strong>
            <br />
            {blog.title}
          </p>
          <p>
            <strong>Subject: </strong>
            <br />
            {blog.subject}
          </p>
          <p>
            <strong>Key: </strong>
            <br />
            {blog.title}
          </p>
        </BlogTitle>
      </BlogStyles>
    );
  }
}

export default Blog;
