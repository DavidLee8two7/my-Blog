import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { BlogStyles, HerbImage, HerbDescription } from "./styles/BlogStyles";

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
              <span>{blog.title}</span>
            </a>
          </Link>
        </HerbImage>
        <HerbDescription>
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
