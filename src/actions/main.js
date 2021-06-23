import contants from "../constants";

export const setLoading = (loading) => {
  return {
    type: contants.main.SET_LOADING,
    payload: loading,
  };
};