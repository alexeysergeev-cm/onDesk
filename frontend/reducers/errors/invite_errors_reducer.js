import { RECEIVE_INVITE_ERRORS } from '../../actions/users_actions';
import { CLEAR_ERRORS } from '../../actions/clear_errors_actions'

const _errors = {
  errors: []
}

const inviteErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_INVITE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default inviteErrorsReducer;