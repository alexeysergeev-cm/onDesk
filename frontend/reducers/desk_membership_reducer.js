import { CREATE_MEMBERSHIP } from '../actions/desk_memberships_actions';
import { CLEAR_MESSAGE } from '../actions/clear_errors_actions'

const membershipReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch(action.type){
    case CREATE_MEMBERSHIP:
      debugger
      return action.payload;
    case CLEAR_MESSAGE:
      return "";
    default:
      return state;
  }
}

export default membershipReducer;