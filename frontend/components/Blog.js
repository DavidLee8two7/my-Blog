import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { BlogStyles, HerbImage, HerbDescription } from "./blogsPage/BlogStyles";

class Blog extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired
  };

  render() {
    const { blog } = this.props;
    return (
      <BlogStyles>
        <HerbImage>
          <Link
            href={{
              pathname: "/blog",
              query: { id: blog.id }
            }}
          >
            <a>
              {blog.image && <img src={blog.image} alt={blog.title} />}
              <h4>{blog.title}</h4>
            </a>
          </Link>
        </HerbImage>
        <HerbDescription>
          <p>
            <strong>Scientific Name :</strong>
            <br />
            {blog.scientific}
          </p>
          <p>
            <strong>Medicinal effect : </strong>
            <br />
            {blog.effect}
          </p>
        </HerbDescription>
      </BlogStyles>
    );
  }
}

export default Blog;