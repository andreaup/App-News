import {GET_ARTICLE} from "./actionTypes";

export const fetchArticles = () => {
  return dispatch => {
    fetch("https://api.canillitapp.com/latest/2020-08-01")
      .then(response => response.json())
      .then(response => {
        console.log("response", response);
        dispatch(getArticles(response));
      });
  };
};

export const getArticles = articles => ({
  type: GET_ARTICLE,
  payload: { articles }
});
