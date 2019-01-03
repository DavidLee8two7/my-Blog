import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  BlogStyles,
  HerbImage,
  HerbDescription,
  Title
} from "./blogsPage/BlogStyles";

class Blog extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired
  };

  render() {
    const { blog } = this.props;
    return (
      <BlogStyles>
        <HerbImage>
          {blog.image && <img src={blog.image} alt={blog.title} />}
          <Title>
            <Link
              href={{
                pathname: "/blog",
                query: { id: blog.id }
              }}
            >
              <a>
                <h4>{blog.title}</h4>
              </a>
            </Link>
          </Title>
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

export default Blog;
