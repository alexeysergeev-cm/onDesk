import { RECEIVE_INVITE_ERRORS } from '../../actions/users_actions';

const _errors = {
  errors: []
}

const inviteErrorsReducer = (state = _errors, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_INVITE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default inviteErrorsReducer;