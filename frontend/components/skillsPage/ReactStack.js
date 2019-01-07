import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import ReactStyles from "./ReactStyles";
import { StyledButton, CloseButton } from "../styles/StyledButtons";
import { Description } from "./StackList";

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
                <p>T - Shirts Factory in Santa Ana, CA</p>
              </header>
              <Description>
                <ul>
                  <li>Server Side Rendering</li>
                  <li className="hide">Styled Components</li>
                  <li className="hide">Theming</li>
                  <li className="hide">Animations</li>
                  <li>JSON Web Token (JWT)</li>
                  <li className="hide">Cache Management</li>
                  <li>Loading and Error States</li>
                  <li>Logic and Flow with Async + Await</li>
                </ul>
                <ul>
                  <li>Authentication and Permissions</li>
                  <li className="hide">Charging Credit Cards</li>
                  <li className="hide">Hosting and Transforming Images</li>
                  <li>Sending Email</li>
                  <li className="hide">Forms in React</li>
                  <li>Unit Testing</li>
                  <li className="hide">Mocking Components</li>
                  <li>Pagination</li>
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
                  href="https://github.com/SanBuNam/T-shirts-factory-prototype"
                >
                  <StyledButton style={{ background: "#393939" }}>
                    Git Hub
                  </StyledButton>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/SanBuNam/T-shirts-factory-prototype"
                >
                  <StyledButton style={{ background: "#01579b" }}>
                    Link to Website
                  </StyledButton>
                </a>
              </div>
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
