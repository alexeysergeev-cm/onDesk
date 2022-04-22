import { CREATE_MEMBERSHIP, DELETE_MEMBERSHIP } from '../actions/desk_memberships_actions';
import { CLEAR_MESSAGE } from '../actions/clear_errors_actions'
import { RECEIVE_DESK } from "../actions/desk_actions";

const membershipReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state);
  
  switch(action.type){
    case CREATE_MEMBERSHIP:
      const newMember = action.payload.new_member;
      const dm = action.payload.desk_membership;
      nextState[dm.id] = newMember;
      return nextState
    case DELETE_MEMBERSHIP:
      return action.payload.desk_memberships;
    case CLEAR_MESSAGE:
      return "";
    case RECEIVE_DESK:
      return Object.assign({}, action.payload.desk_memberships);
    default:
      return state;
  }
}

export default membershipReducer;