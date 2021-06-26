import contants from "../constants";
import graphQlClient from "../graphql/client";
import * as UserUtils from "../utils/user";
import { setLoading } from "./main";
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

  
  export const getRepositoryIssues = (username, repository, first, after) => (dispatch, _getState) => {
    setLoading(true);
  
    graphQlClient
      .query({
        query: RepositoryIssues.REPOSITORY_ISSUES,
        variables: { username, repository, first, after }, //remember to input variables for request
      })
      .then((result) => {
        const {
          data: { repository },
        } = result;
        dispatch(setRepository(repository["owner"]["login"], repository["name"]));
        dispatch(setRepositoryIssues(repository["issues"]));
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };