import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import NodeStyles from "../styles/NodeStyles";
import CloseButton from "../styles/CloseButton";
import StyledButton from "../styles/StyledButton";
import {
  ReactSide,
  TechType,
  TechIcon,
  TechDescription
} from "../styles/StackList";

const LOCAL_STATE_NODE = gql`
  query {
    cardNode @client
  }
`;

const TOGGLE_CARD_NODE = gql`
  mutation {
    toggleNode @client
  }
`;
const NodeStack = () => {
  return (
    <Mutation mutation={TOGGLE_CARD_NODE}>
      {toggleNode => (
        <Query query={LOCAL_STATE_NODE}>
          {({ data }) => (
            <NodeStyles open={data.cardNode}>
              <header>
                <CloseButton onClick={toggleNode} title="close">
                  &times;
                </CloseButton>
                <p>Node full Stack</p>
              </header>
              <ReactSide>
                <TechType>
                  <TechIcon />
                  <TechDescription />
                </TechType>
                <TechType>
                  <TechIcon />
                  <TechDescription />
                </TechType>
                <TechType>
                  <TechIcon />
                  <TechDescription />
                </TechType>
                <TechType>
                  <TechIcon />
                  <TechDescription />
                </TechType>
              </ReactSide>
              <footer>
                <StyledButton onClick={toggleNode}>Close</StyledButton>
              </footer>
            </NodeStyles>
          )}
        </Query>
      )}
    </Mutation>
  );
};

export default NodeStack;
export { LOCAL_STATE_NODE, TOGGLE_CARD_NODE };
