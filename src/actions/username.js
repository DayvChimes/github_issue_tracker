import contants from "../constants";
import graphQlClient from "../graphql/client";
import * as UserUtils from "../utils/user";
import * as UsernameIssues from "../graphql/username";
import main from "./main";
import { connect } from "react-redux";

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
      //console.log(user);
      dispatch(setUser(user["login"]));
      //dispatch(getIssues(user["login"], 10, null));
    })
    .catch((error) => {
      console.log("error", error);
    })
    .finally(() => {
      //dispatch(main.setLoading(false));
    });
};

export const getIssues = (username, first, after) => (dispatch, _getState) => {

  console.log("signIn");
  graphQlClient
    .query({
      query: UsernameIssues.USERNAME_ISSUES,
      variables: { username, first, after }, //remember to input variables for request
    })
    .then((result) => {
      const {
        data: { user },
      } = result;
      //console.log(user);
      dispatch(setUser(user["login"]));
      dispatch(setIssues(user["issues"]));
    })
    .catch((error) => {
      console.log("error", error);
    })
    .finally(() => {
    });
};

