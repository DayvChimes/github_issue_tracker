import constants from "../constants";

export const setLoading = (loading) => {
  return {
    type: constants.main.SET_LOADING,
    payload: loading,
  };
};

export const setError = (error) => {
  return {
    type: constants.main.SET_ERROR,
    payload: error,
  };
};

export const setFilterby = (filter) => {
  return {
    type: constants.main.SET_FILTER,
    payload: filter,
  };
};

export const setLabel = (label) => {
  return {
    type: constants.main.SET_LABEL,
    payload: label,
  };
};

export const setStatus = (status) => {
  return {
    type: constants.main.SET_STATUS,
    payload: status,
  };
};
