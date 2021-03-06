import { RECEIVE_LIST, REMOVE_LIST } from '../actions/list_actions';
import { RECEIVE_DESK } from '../actions/desk_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  
  switch (action.type) {
    case RECEIVE_LIST:
      nextState[action.list.id] = action.list
      return nextState
    case REMOVE_LIST:
      delete nextState[action.listId]
      return nextState
    case RECEIVE_DESK: 
      return Object.assign({}, action.payload.lists)
    default:
      return state;
  }

}

export default listsReducer;