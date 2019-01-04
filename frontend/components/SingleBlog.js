import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./styles/ErrorMessage";
import {
  SingleBlogStyle,
  SingleHerbImage,
  SingleHerbDescription
} from "./styles/SingleBlogStyles";
import Head from "next/head";

const SINGLE_BLOG_QUERY = gql`
  query SINGLE_BLOG_QUERY($id: ID!) {
    blog(where: { id: $id }) {
      id
      title
      scientific
      effect
      reference
      largeImage
    }
  }
`;

class SingleBlog extends Component {
  render() {
    return (
      <Query
        query={SINGLE_BLOG_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.blog) return <p>No blog found for {this.props.id} </p>;
          const blog = data.blog;
          return (
            <SingleBlogStyle image={blog.largeImage}>
              <Head>
                <title>David's Blog | {blog.title}</title>
              </Head>
              <SingleHerbImage>
                <img src={blog.largeImage} alt={blog.title} />
                <span>{blog.title}</span>
              </SingleHerbImage>
              <SingleHerbDescription>
                <span>
                  Scientific Name :
                  <br />
                  {blog.scientific}
                </span>
                <p>
                  <strong>Medicinal Effect : </strong>
                  <br />
                  {blog.effect}
                </p>
                <p>
                  <strong>Reference :</strong>
                  <br />
                  {blog.reference}
                </p>
              </SingleHerbDescription>
            </SingleBlogStyle>
          );
        }}
      </Query>
    );
  }
}

export default SingleBlog;
export { SINGLE_BLOG_QUERY };
