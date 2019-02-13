import React, { Component } from "react";
import { Query } from "react-apollo";
import Head from "next/head";
import gql from "graphql-tag";
import Error from "./styles/ErrorMessage";
import {
  SingleBlogStyle,
  SingleBlogDescription
} from "./styles/SingleBlogStyles";

const SINGLE_BLOG_QUERY = gql`
  query SINGLE_BLOG_QUERY($id: ID!) {
    blog(where: { id: $id }) {
      id
      title
      subject
      problem
      opinion
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
                <title>Editorial | {blog.title}</title>
              </Head>
              <SingleBlogDescription>
                <span>{blog.title}</span>
                <p>
                  <strong>Subject : </strong>
                  <br />
                  {blog.subject}
                </p>
                <p>
                  <strong>Problem :</strong>
                  <br />
                  {blog.problem}
                </p>
                <p>
                  <strong>Opinion :</strong>
                  <br />
                  {blog.opinion}
                </p>
              </SingleBlogDescription>
            </SingleBlogStyle>
          );
        }}
      </Query>
    );
  }
}

export default SingleBlog;
export { SINGLE_BLOG_QUERY };
