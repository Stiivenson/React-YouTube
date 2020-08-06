import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), window.devToolsExtension())
);

export default store;
