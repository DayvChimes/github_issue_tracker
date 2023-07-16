import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import * as UserUtils from "../utils/user";

//const apikey = process.env['GITHUB_API_TOKEN'];

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.github.com/graphql",
});

const apikey = "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";

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  //console.log(apikey + " this is the github access token");
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: apikey ? `Bearer ${apikey}` : "",
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
