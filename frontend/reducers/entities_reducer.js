import { combineReducers } from 'redux';
import desksReducer from './desks_reducer';
import usersReducer from './users_reducer';
import listsReducer from './lists_reducer';
import papersReducer from  './papers_reducer';
import commentsReducer from './comments_reducer';
import searchReducer from './search_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  desks: desksReducer,
  lists: listsReducer,
  papers: papersReducer,
  comments: commentsReducer,
  searchItems: searchReducer

})

export default entitiesReducer;