import { combineReducers } from 'redux';
import desksReducer from './desks_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  desks: desksReducer
})

export default entitiesReducer;