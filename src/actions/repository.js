import constants from "../constants";
import graphQlClient from "../graphql/client";
import * as UserUtils from "../utils/user";
import { setLoading } from "./main";
import * as RepositoryIssues from "../graphql/repository";

const setRepository = (username, repository) => ({
  type: constants.repository.SET_REPOSITORY,
  payload: {
    username,
    repository,
  },
});

const setRepositoryIssues = (issues) => ({
  type: constants.repository.SET_ISSUES,
  payload: issues,
});

const setTotalRepositoryIssues = (repository) => ({
  type: constants.repository.SET_TOTAL_ISSUES,
  payload: repository,
});

const setMoreRepoIssues = (issues) => {
  return {
    type: constants.repository.SET_MORE_ISSUES,
    payload: issues,
  };
};

export const refreshRepository = () => {
  return {
    type: constants.repository.REFRESH,
  };
};

export const repositoryRequest = (request) => {
  return {
    type: constants.repository.REQUEST,
    payload: request,
  };
};

export const getRepositoryIssues =
  (username, repository, first, after, navigation) => (dispatch, _getState) => {
    dispatch(setLoading(true));
    dispatch(repositoryRequest(true));

    graphQlClient
      .query({
        query: RepositoryIssues.REPOSITORY_ISSUES,
        variables: { username, repository, first, after },
      })
      .then((result) => {
        const {
          data: { repository },
        } = result;

        if (repository.issues.edges.length == 0) {
          alert("No Issues Available");
          navigation.pop();
        } else {
          dispatch(
            setRepository(repository["owner"]["login"], repository["name"])
          );
          dispatch(setRepositoryIssues(repository["issues"]));
          dispatch(getTotalRepoIssues(repository["owner"]["login"], repository["name"]));
        }
      })
      .catch((error) => {
        console.log("error", error);
        navigation.pop();
        alert(
          "Input the Correct Names of the Username and/or Repository",
          undefined,
          2
        );
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

export const getMoreRepoIssues =
  (username, repository, first, after, field, labels) =>
  (dispatch, _getState) => {
    graphQlClient
      .query({
        query: RepositoryIssues.REPOSITORY_FILTERED_ISSUES,
        variables: {
          username,
          repository,
          first,
          after,
          field,
          labels
        },
      })
      .then((result) => {
        const {
          data: { repository },
        } = result;

        if (repository.issues.edges.length == 0) {
          alert("No More Issues, Pull down to Refresh");
        } else {
          dispatch(setMoreRepoIssues(repository["issues"]));
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {});
  };

export const getFilteredRepoIssues =
  (username, repository, first, after, field, labels) =>
  (dispatch, _getState) => {
    dispatch(setLoading(true));

    graphQlClient
      .query({
        query: RepositoryIssues.REPOSITORY_FILTERED_ISSUES,
        variables: {
          username,
          repository,
          first,
          after,
          field,
          labels
        },
      })
      .then((result) => {
        const {
          data: { repository },
        } = result;

       dispatch(setRepositoryIssues(repository["issues"]));
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };


  export const getRepoIssuesLabels =
  (username, repository, first, after, field, labels) =>
  (dispatch, _getState) => {
    dispatch(setLoading(true));

    graphQlClient
      .query({
        query: RepositoryIssues.REPOSITORY_FILTERED_ISSUES,
        variables: {
          username,
          repository,
          first,
          after,
          field,
          labels
        },
      })
      .then((result) => {
        const {
          data: { repository },
        } = result;

          dispatch(setRepositoryIssues(repository["issues"]));
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        
        dispatch(setLoading(false));
      });
  };


  export const getTotalRepoIssues =
  (username, repository) =>
  (dispatch, _getState) => {
    dispatch(setLoading(true));

    graphQlClient
      .query({
        query: RepositoryIssues.REPOSITORY_TOTAL_ISSUES,
        variables: {
          username,
          repository
        },
      })
      .then((result) => {
        const {
          data: { repository },
        } = result;

          dispatch(setTotalRepositoryIssues(repository));
          //console.log(repository);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        
        dispatch(setLoading(false));
      });
  };
