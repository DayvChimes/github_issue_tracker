import constants from "../constants";

const initialState = {
  username: {},
  totalIssues:{ 
    issues: {},
    openIssues: {},
    closedIssues: {},
    },
  userIssues: {
    pageInfo: {},
    edges: [],
  },
  userRequest: false,
};

const username = (state = initialState, action) => {
  switch (action.type) {
    case constants.username.SET_USER:
      return { ...state, username: action.payload };
    case constants.username.SET_ISSUES:
      return { ...state, userIssues: action.payload };
    case constants.username.SET_MORE_ISSUES:
      return { ...state, 
        userIssues:{
        ...state.userIssues,
        pageInfo: action.payload.pageInfo,
        edges: state.userIssues.edges.concat(action.payload.edges)
        }};
    case constants.username.REQUEST:
      return { ...state, userRequest: action.payload };
    case constants.username.SET_ISSUES_EDGES:
      return { ...state, userIssues:{ edges: action.payload }};
    case constants.username.SET_TOTAL_ISSUES:
      return { ...state, totalIssues: action.payload };
    default:
      return state;
  }
};

export default username;
