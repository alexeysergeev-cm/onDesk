import { RECEIVE_DESK_ERRORS } from '../../actions/desk_actions'

const _errors = {
  errors: []
}

const deskErrorsReducer = (state = _errors, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DESK_ERRORS:
      debugger
      return action.errors;
    default:
      return state;
  }
}

export default deskErrorsReducer;