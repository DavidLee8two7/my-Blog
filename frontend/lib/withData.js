import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint } from "../config";
import { LOCAL_STATE_QUERY } from "../components/skillsPage/ReactStack";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCard(_, variables, { cache }) {
            const { cardOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY
            });
            const data = {
              data: { cardOpen: !cardOpen }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cardOpen: false
      }
    }
  });
}

export default withApollo(createClient);
