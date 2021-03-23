import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { FIND_USER } from '../actions/users_actions'


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      return Object.assign({}, state, 
        { [action.currentUser.id]: action.currentUser })
    case FIND_USER:
      nextState[action.user.id] = action.user
      return nextState;
    default:
      return state
  }
}

export default usersReducer;
