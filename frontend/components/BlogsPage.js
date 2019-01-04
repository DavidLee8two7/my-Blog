import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Blog from "../components/Blog";
import Pagination from "./Pagination";
import { perPage } from "../config";

const ALL_BLOGS_QUERY = gql`
  query ALL_BLOGS_QUERY($skip: Int = 0, $first: Int = ${perPage} ) {
    blogs(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      scientific
      effect
      reference
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(225, 225, 225, 0.5),
      rgba(237, 237, 237, 0.5)
    ),
    url(/static/img/herbalism.jpeg);
`;

const BlogsList = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin: 0 auto;
  max-width: 1200px;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

class Blogs extends Component {
  render() {
    return (
      <Center>
        <Pagination page={this.props.page} />
        <Query
          query={ALL_BLOGS_QUERY}
          variables={{
            skip: this.props.page * perPage - perPage
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <BlogsList>
                {data.blogs.map(blog => (
                  <Blog blog={blog} key={blog.id} />
                ))}
              </BlogsList>
            );
          }}
        </Query>
        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export default Blogs;
export { ALL_BLOGS_QUERY };
