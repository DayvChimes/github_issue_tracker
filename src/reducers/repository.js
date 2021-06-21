import contants from "../constants";

const initialState = {
  repository: {},
  repositoryIssues: {}
};

const repository = (state = initialState, action) => {
  switch (action.type) {
    case contants.repository.SET_REPOSITORY:
      return { ...state, repository: action.payload };
    case contants.repository.SET_ISSUES:
      return { ...state, repositoryIssues: action.payload };
    default:
      return state;
  }
};

export default repository;