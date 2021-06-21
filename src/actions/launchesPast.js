import React from "react";
import {
  View,
  Text,
  VirtualizedList,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import * as UsernameIssues from "../graphql/username";
import { useDispatch } from "react-redux";
import styles from "./styles";
import { useQuery, gql } from "@apollo/client";


const LaunchesPast = (username, dispatch) => {
  console.log("launchpast_1");
  return AsyncFunction(dispatch, username);
};


const AsyncFunction = (username) => (dispatch, _getState) =>{  
  const { loading, error, data } = useQuery(UsernameIssues.USERNAME_LOGIN, {
    variables: { username },
  });
  console.log("launchpast");
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default AsyncFunction;
