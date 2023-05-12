import constants from "../constants";

const initialState = {
  repository: {},
  totalIssues:{ 
    issues: {},
    openIssues: {},
    closedIssues: {},
    },
  repositoryIssues: {
    pageInfo: {},
    edges: []
  },
  repoRequest: false,
};

const repository = (state = initialState, action) => {
  switch (action.type) {
    case constants.repository.SET_REPOSITORY:
      return { ...state, repository: action.payload };
    case constants.repository.SET_ISSUES:
      return { ...state, repositoryIssues: action.payload };
    case constants.repository.SET_MORE_ISSUES:
      return { ...state, 
        repositoryIssues:{
        ...state.repositoryIssues,
        pageInfo: action.payload.pageInfo,
        edges: state.repositoryIssues.edges.concat(action.payload.edges)
        }};
    case constants.repository.REQUEST:
      return { ...state, repoRequest: action.payload };
    case constants.repository.SET_TOTAL_ISSUES:
        return { ...state, totalIssues: action.payload };
    default:
      return state;
  }
};

export default repository;