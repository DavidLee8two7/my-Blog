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

const TOGGLE_CARD_MUTATION = gql`
  mutation {
    toggleCard @client
  }
`;

const ReactStack = () => {
  return (
    <Mutation mutation={TOGGLE_CARD_MUTATION}>
      {toggleCard => (
        <Query query={LOCAL_STATE_QUERY}>
          {({ data }) => (
            <ReactStyles open={data.cardOpen}>
              <header>
                <CloseButton onClick={toggleCard} title="close">
                  &times;
                </CloseButton>
                <p>React and GraphQL stack</p>
              </header>

              <footer>
                <StyledButton onClick={toggleCard}>Close</StyledButton>
              </footer>
            </ReactStyles>
          )}
        </Query>
      )}
    </Mutation>
  );
};

export default ReactStack;
export { LOCAL_STATE_QUERY, TOGGLE_CARD_MUTATION };
