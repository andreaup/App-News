import {combineReducers} from "redux"
import * as actionsTypes from "../actions/actionTypes";

const articles = (articles = [], { type, payload }) => {
    switch (type) {
      case actionsTypes.GET_ARTICLE:
        return payload.articles;
      default:
        return articles;
    }
  };
  
  export default combineReducers({
    articles
  });
  
