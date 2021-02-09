import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";


const _nullSession = {
  currentUserId: null
}

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // return nextState[currentUserId] = action.currentUser.id;
      return { currentUserId: action.currentUser.id}
    case REMOVE_CURRENT_USER:
      // return nextState[currentUserId] = null;
      return _nullSession;
    default:
      return state
  }
}

export default sessionReducer;