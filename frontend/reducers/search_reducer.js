import { SEARCH_ITEMS } from '../actions/search_actions';


const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case SEARCH_ITEMS:
      debugger
      return action.items;
    default:
      return state;
  }

}

export default searchReducer;