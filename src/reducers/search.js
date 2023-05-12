import constants from "../constants";

const initialState = {
  search: "",
  searchIssues: {},
  searchRequest: false,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case constants.search.SET_SEARCH:
      return { ...state, search: action.payload };
    case constants.username.SET_ISSUES:
      return { ...state, searchIssues: action.payload };
    case constants.username.REQUEST:
      return { ...state, searchRequest: action.payload };
    default:
      return state;
  }
};

export default search;
