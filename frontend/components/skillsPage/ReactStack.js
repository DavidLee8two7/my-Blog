import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import ReactStyles from "../styles/ReactStyles";
import CloseButton from "../styles/CloseButton";
import StyledButton from "../styles/StyledButton";

const LOCAL_STATE_QUERY = gql`
  query {
    cardOpen @client
  }
`;

const ReactStack = () => {
  return (
    <Query query={LOCAL_STATE_QUERY}>
      {({ data }) => (
        <ReactStyles open={data.cardOpen}>
          <header>
            <CloseButton title="close">&times;</CloseButton>
            <p>React and GraphQL stack</p>
          </header>

          <footer>
            <StyledButton>Close</StyledButton>
          </footer>
        </ReactStyles>
      )}
    </Query>
  );
};

export default ReactStack;
export { LOCAL_STATE_QUERY };
