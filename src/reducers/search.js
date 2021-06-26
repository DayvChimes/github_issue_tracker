import contants from "../constants";

const initialState = {
  search: ""
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case contants.search.SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default search;
