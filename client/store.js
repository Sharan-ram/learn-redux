import rootReducer from "./reducers/rootReducer";
import { browserHistory } from "react-router";
import { createStore, compse } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import comments from "./data/comments";
import posts from "./data/posts";

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
