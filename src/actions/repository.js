import contants from "../constants";
import graphQlClient from "../graphql/client";
import * as UserUtils from "../utils/user";
import * as RepositoryIssues from "../graphql/repository";

const setRepository = (repository) => ({
  type: contants.repository.SET_REPOSITORY,
  payload: repository,
});

const setRepositoryIssues = (issues) => ({
  type: contants.repository.SET_ISSUES,
  payload: issues,
});

export const signIn = (username, repository) => (dispatch, _getState) => {
  dispatch(main.setLoading(true));

  graphQlClient
    .request({
      request: RepositoryIssues.REPOSITORY_LOGIN,
      variables: { username, repository },
      update: (_cache, result) => {
        const {
          data: {
            repository: { repository, id },
          },
        } = result;
        UserUtils.setTokenToLocalStorage(id);
        dispatch(setRepository(repository));
        //dispatch(getRepositoryIssues(username, repository))
        console.log(repository);
      },
    })
    .catch((error) => {
      console.log("error", error);
    })
    .finally(() => {
      dispatch(main.setLoading(false));
    });
};


export const getRepositoryIssues = (username, repository) => (dispatch, _getState) => {
    dispatch(main.setLoading(true));

    graphQlClient
      .request({
        request: RepositoryIssues.REPOSITORY_ISSUES,
        variables: { username, repository, first, after }, //remember to pass this variables
        update: (_cache, result) => {
          const {
            data: {
              repositoryIssues: { issues },
            },
          } = result;
          dispatch(setRepositoryIssues(issues)); //make this action
        },
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        dispatch(main.setLoading(false));
      });
  };
