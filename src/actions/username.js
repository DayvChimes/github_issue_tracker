import React from "react";
import contants from "../constants";
import { View, Text } from "react-native";
import graphQlClient from "../graphql/client";
import store from "../Store/index";
import * as UserUtils from "../utils/user";
import * as UsernameIssues from "../graphql/username";
import { useQuery, gql } from "@apollo/client";
import main from "./main";

const setUser = (username) => {
  return {
    type: contants.username.SET_USER,
    payload: username,
  };
};

const setIssues = (issues) => {
  return {
    type: contants.username.SET_ISSUES,
    payload: issues,
  };
};

export const signIn = (username) => (dispatch, _getState) => {
  console.log("signIn");
  graphQlClient
    .query({
      query: UsernameIssues.USERNAME_LOGIN,
      variables: { username },
    })
    .then((result) => {
      const {
        data: { user },
      } = result;
      console.log(user);
      //dispatch(setUser(login));
    })
    .catch((error) => {
      console.log("error", error);
    })
    .finally(() => {
      //dispatch(main.setLoading(false));
    });
};

export const getIssues = (username, first, after) => (dispatch, _getState) => {
  //dispatch(main.setLoading(true));

  graphQlClient
    .request({
      request: UsernameIssues.USERNAME_ISSUES,
      variables: { username, first, after }, //remember to input variables for request
      update: (_cache, result) => {
        const {
          data: {
            usernameIssues: { issues },
          },
        } = result;
        dispatch(setIssues(issues)); //make this action
      },
    })
    .catch((error) => {
      console.log("error", error);
    })
    .finally(() => {
      dispatch(main.setLoading(false));
    });
};

const GetUserIssues = (username, first, after) => {
  const { loading, error, data } = useQuery(UsernameIssues.USERNAME_ISSUES, {
    variables: { username, first, after },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  //dispatch(setIssues(data));
  //dispatch(setUser(username));
  return console.log(data);
};

export default GetUserIssues;
