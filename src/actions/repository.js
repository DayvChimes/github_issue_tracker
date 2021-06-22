import contants from "../constants";
import graphQlClient from "../graphql/client";
import * as UserUtils from "../utils/user";
import * as RepositoryIssues from "../graphql/repository";

const setRepository = (username, repository) => ({
  type: contants.repository.SET_REPOSITORY,
  payload: {
    username,
    repository
  }
});

const setRepositoryIssues = (issues) => ({
  type: contants.repository.SET_ISSUES,
  payload: issues,
});


  export const signInRepository = (username, repository) => (dispatch, _getState) => {
    console.log("signIn");
    graphQlClient
      .query({
        query: RepositoryIssues.REPOSITORY_LOGIN,
        variables: { username, repository },
      })
      .then((result) => {
        const {
          data: { repository },
        } = result;
        //console.log(repository);
        dispatch(setRepository(repository["owner"]["login"], repository["name"]));
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        //dispatch(main.setLoading(false));
      });
  };
  
  export const getRepositoryIssues = (username, repository, first, after) => (dispatch, _getState) => {
    //dispatch(main.setLoading(true));
  
    graphQlClient
      .query({
        query: RepositoryIssues.REPOSITORY_ISSUES,
        variables: { username, repository, first, after }, //remember to input variables for request
      })
      .then((result) => {
        const {
          data: { repository },
        } = result;
        console.log(repository);
        dispatch(setRepository(repository["owner"]["login"], repository["name"]));
        dispatch(setRepositoryIssues(repository["issues"]));
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        //dispatch(main.setLoading(false));
      });
  };