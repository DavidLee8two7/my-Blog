import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import ReactStyles from "../styles/ReactStyles";
import CloseButton from "../styles/CloseButton";
import StyledButton from "../styles/StyledButton";

const LOCAL_STATE_REACT = gql`
  query {
    cardReact @client
  }
`;

const TOGGLE_CARD_REACT = gql`
  mutation {
    toggleReact @client
  }
`;

const ReactStack = () => {
  return (
    <Mutation mutation={TOGGLE_CARD_REACT}>
      {toggleReact => (
        <Query query={LOCAL_STATE_REACT}>
          {({ data }) => (
            <ReactStyles open={data.cardReact}>
              <header>
                <CloseButton onClick={toggleReact} title="close">
                  &times;
                </CloseButton>
                <p>React and GraphQL stack</p>
              </header>
              <footer>
                <StyledButton onClick={toggleReact}>Close</StyledButton>
              </footer>
            </ReactStyles>
          )}
        </Query>
      )}
    </Mutation>
  );
};

export default ReactStack;
export { LOCAL_STATE_REACT, TOGGLE_CARD_REACT };
