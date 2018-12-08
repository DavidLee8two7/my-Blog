import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

const ALL_MEMOES_QUERY = gql`
  query ALL_MEMOES_QUERY {
    memoes {
      id
      name
      email
      subject
      message
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const MemoDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Memoes extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_MEMOES_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            console.log(data);
            return <MemoDiv>hi</MemoDiv>;
          }}
        </Query>
      </Center>
    );
  }
}

export default Memoes;
