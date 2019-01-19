import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint, prodEndpoint } from "../config";
import { LOCAL_STATE_REACT } from "../components/skillsPage/ReactStack";
import { LOCAL_STATE_NODE } from "../components/skillsPage/NodeStack";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "same-origin"
        },
        headers
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleReact(_, variables, { cache }) {
            const { cardReact } = cache.readQuery({
              query: LOCAL_STATE_REACT
            });
            const data = {
              data: { cardReact: !cardReact }
            };
            cache.writeData(data);
            return data;
          },
          toggleNode(_, variables, { cache }) {
            const { cardNode } = cache.readQuery({
              query: LOCAL_STATE_NODE
            });
            const data = {
              data: { cardNode: !cardNode }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cardReact: false,
        cardNode: false
      }
    }
  });
}

export default withApollo(createClient);
