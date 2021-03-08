import {RECEIVE_LIST, REMOVE_LIST} from '../actions/list_actions';


const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  
  switch (action.type) {
    case RECEIVE_LIST:
      return nextState[action.list.id] = action.list
    case REMOVE_LIST:
      delete nextState[action.listId]
      return nextState
    default:
      return state;
  }

}

export default listsReducer;