import contants from "../constants";
//import graphQlClient from "../graphql/client";
import * as UserUtils from "../utils/user";
import * as UsernameIssues from "../graphql/username";
import { setLoading } from "./main";
import { connect } from "react-redux";
import graphQlClient from "../graphql/client";

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


export const getIssues = (username, first, after) => (dispatch, _getState) => {
  dispatch(setLoading(true));     //Needed this to load before navigation to issueList
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
      dispatch(setUser(user["login"]));
      dispatch(setIssues(user["issues"]));
    })
    .catch((error) => {
      console.log("error", error);
    })
    .finally(() => {
      dispatch(setLoading(false));  
    });
};

