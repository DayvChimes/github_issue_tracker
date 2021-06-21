import React from "react";
import { Provider } from "react-redux";
import store from "./src/Store";
import { ApolloProvider } from "@apollo/client";
import { View, Text} from 'react-native';
import Navigator from "./src/routes/stack";
import client from "./src/graphql/client";
import Loader from "./src/index";

const App = () => {
    return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Navigator/>
      </Provider>
    </ApolloProvider>
    );
}

export default App;
