import contants from "../constants";

export const setSearch = (search) => {
  return {
    type: contants.search.SET_SEARCH,
    payload: search,
  };
};