import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./styles/ErrorMessage";
import styled from "styled-components";
import Head from "next/head";

const SingleBlogStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bbs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 600px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_BLOG_QUERY = gql`
  query SINGLE_BLOG_QUERY($id: ID!) {
    blog(where: { id: $id }) {
      id
      title
      subject
      message
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
            <SingleBlogStyles>
              <Head>
                <title>David's Blog | {blog.title}</title>
              </Head>
              <img src={blog.largeImage} alt={blog.title} />
              <div className="details">
                <h2>{blog.title}</h2>
                <p>{blog.message}</p>
              </div>
            </SingleBlogStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleBlog;
export { SINGLE_BLOG_QUERY };
