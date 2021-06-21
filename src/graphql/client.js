import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import * as UserUtils from "../utils/user";
import { setContext } from "@apollo/client/link/context";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = UserUtils.getTokenFromLocalStorage();

  return {
    headers: {
      ...headers,
      authorization: token
    }
  };
});

const client = new ApolloClient({
  uri: authLink.concat(link),
  cache: cache
});

export default client;
