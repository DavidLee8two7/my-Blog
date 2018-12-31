import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import NodeStyles from "./NodeStyles";
import { StyledButton, CloseButton } from "../styles/StyledButtons";
import { Description } from "./StackList";

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
                <p>Herbalist Network</p>
              </header>
              <Description>
                <ul>
                  <li>User Accounts</li>
                  <li>Database Schemas</li>
                  <li>Templating and Mixins</li>
                  <li>Middleware</li>
                  <li>Password Reset Flow</li>
                  <li>Routing</li>
                  <li>File Uploading</li>
                  <li>MVC Pattern</li>
                </ul>
                <ul>
                  <li>REST API endpoints</li>
                  <li>Document Relationships</li>
                  <li>Restricting Operations</li>
                  <li>Image Resizing</li>
                  <li>Storing Geospatial Data</li>
                  <li>Advanced DB Queries</li>
                  <li>Sending Email</li>
                  <li>Geocoding Addresses</li>
                </ul>
              </Description>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr"
                }}
              >
                <a
                  target="_blank"
                  href="https://github.com/DavidLee8two7/Dev_stickers_Co"
                >
                  <StyledButton style={{ background: "#393939" }}>
                    Git Hub
                  </StyledButton>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/DavidLee8two7/Dev_stickers_Co"
                >
                  <StyledButton style={{ background: "#006064" }}>
                    Link to Website
                  </StyledButton>
                </a>
              </div>
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
