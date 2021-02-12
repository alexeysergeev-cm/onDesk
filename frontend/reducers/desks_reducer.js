import { RECEIVE_DESK, RECEIVE_DESK_ERRORS, RECEIVE_DESKS} from '../actions/desk_actions';

const desksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DESKS:
      return action.desks;
    default:
      return state;
  }

}

export default desksReducer;