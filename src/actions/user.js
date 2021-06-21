import contants from "../constants";
import graphQlClient from "../graphql/client";
import * as UserUtils from "../utils/user";
import * as UsernameIssues from "../graphql/username";
import { GraphQLClient } from "graphql-request";


const setUser = (username) => ({
  type: contants.username.SET_USER,
  payload: username,
});

const setIssues = (issues) => ({
  type: contants.username.SET_ISSUES,
  payload: issues,
});

export const signIn = (username) => {
  //dispatch(main.setLoading(true));

  async function main(dispatch){
  const variables = {
    username: username,
  };

  const requestHeaders = {
    authorization: 'Bearer MY_TOKEN'
  }
  
  const data = await graphQlClient.request(UsernameIssues.USERNAME_LOGIN, variables, requestHeaders);

  //UserUtils.setTokenToLocalStorage(id);
  dispatch(setUser(data.login));
  //dispatch(getIssues(username));
  console.log(data);
}
main().catch((error) => console.error(error))
};



