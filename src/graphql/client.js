import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import * as UserUtils from "../utils/user";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.github.com/graphql",
});

const token = "";

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token.token ? `Bearer ${token.token}` : "",
      "Content-Type": "application/json",
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: cache,
  link: concat(authMiddleware, link),
});

export default client;
