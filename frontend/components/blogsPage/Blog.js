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
            <a>
              <h4>
                Scientific name: <br /> {blog.subject}
              </h4>
            </a>
          </Link>
        </div>

        <div>
          <h5>
            Name : <br /> <p>{blog.title}</p>
          </h5>
          <h5>
            medicinal effect : <br /> <span>{blog.message}</span>
          </h5>
        </div>
      </BlogStyles>
    );
  }
}
