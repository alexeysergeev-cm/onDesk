
import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
// import thunk from 'redux-thunk'
import thunk from '../thunk/thunk';  //curtom thunk
import rootReducer from '../reducers/root_reducer'

const configureStore = (preloadedState = {}) => {
  // return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
}

export default configureStore;