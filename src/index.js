import React from 'react';
import { ApolloProvider } from "@apollo/client";
import { View, Text} from 'react-native';
import Navigator from "./routes/stack";
import client from "./graphql/client";


const Loader = () => {
    return(
    <ApolloProvider client={client}>          
        <Navigator />
    </ApolloProvider>
    );
}

//export default Loader;