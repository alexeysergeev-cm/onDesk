import { CREATE_MEMBERSHIP } from '../actions/desk_memberships_actions';

const membershipReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch(action.type){
    case CREATE_MEMBERSHIP:
      return action.payload;
    default:
      return state;
  }
}

export default membershipReducer;