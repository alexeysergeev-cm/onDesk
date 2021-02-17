import { RECEIVE_MEMBERSHIP_ERRORS } from '../../actions/desk_memberships_actions';


const _errors = {
  errors: []
}

const membershipErrorsReducer = (state = _errors, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MEMBERSHIP_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default membershipErrorsReducer;