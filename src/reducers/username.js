import contants from "../constants";

const initialState = {
  username: { login: "", id: "" },
  userIssues: {}
};

const username = (state = initialState, action) => {
  switch (action.type) {
    case contants.username.SET_USER:
      return { ...state, username: action.payload };
    case contants.username.SET_ISSUES:
      return { ...state, userIssues: action.payload };
    default:
      return state;
  }
};

export default username;
