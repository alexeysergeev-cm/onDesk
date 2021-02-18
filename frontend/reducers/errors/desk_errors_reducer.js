import { RECEIVE_DESK_ERRORS } from '../../actions/desk_actions'
import { CLEAR_ERRORS } from '../../actions/clear_errors_actions'

const _errors = {
  errors: []
}

const deskErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DESK_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default deskErrorsReducer;