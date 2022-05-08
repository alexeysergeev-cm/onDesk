import {
  RECEIVE_LIST,
  REMOVE_LIST,
  RECEIVE_TWO_LISTS,
  RECEIVE_LISTS,
} from "../actions/list_actions";
import { RECEIVE_DESK } from "../actions/desk_actions";

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_LIST:
      nextState[action.list.id] = action.list;
      return nextState;
    case REMOVE_LIST:
      delete nextState[action.listId];
      return nextState;
    case RECEIVE_DESK:
      return Object.assign({}, action.payload.lists);
    case RECEIVE_TWO_LISTS:
      const lists = action.payload.data.lists;
      for (let id in lists) {
        nextState[id] = lists[id];
      }
      return nextState;
    case RECEIVE_LISTS:
      return Object.assign({}, action.lists);
    default:
      return state;
  }
};

export default listsReducer;
