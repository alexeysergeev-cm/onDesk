import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
// import thunk from "../thunk/thunk"; //curtom thunk
import rootReducer from "../reducers/root_reducer";

const middleWares = [thunk];

if (process.env.NODE_ENV === "development") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middleWares.push(logger);
}

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleWares)
  );
};

export default configureStore;
