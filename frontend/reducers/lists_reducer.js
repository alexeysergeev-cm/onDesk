import {RECEIVE_LIST, REMOVE_LIST} from '../actions/list_actions';
import { RECEIVE_DESK } from '../actions/desk_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  
  switch (action.type) {
    case RECEIVE_LIST:
      return nextState[action.list.id] = action.list
    case REMOVE_LIST:
      delete nextState[action.listId]
      return nextState
    case RECEIVE_DESK: //show desk with all lists
    // debugger
      return Object.assign(nextState, action.payload.lists)
    default:
      return state;
  }

}

export default listsReducer;