import React, { Component } from "react";
import Head from "next/head";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Resources from "./resourcePage/resourceCard";

const ALL_RESOURCE_QUERY = gql`
  query ALL_RESOURCE_QUERY {
    resources {
      id
      title
      subject
      message
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ResourceList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  max-width: 100rem;
  margin: 0 auto;
`;

class Resource extends Component {
  render() {
    return (
      <Center>
        <Head>
          <title>David Lee | Resources</title>
        </Head>
        <Query query={ALL_RESOURCE_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ResourceList>
                {data.resources.map(resource => (
                  <Resources resource={resource} key={resource.id} />
                ))}
              </ResourceList>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Resource;
export { ALL_RESOURCE_QUERY };
