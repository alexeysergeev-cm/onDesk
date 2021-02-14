import { RECEIVE_DESK, RECEIVE_DESK_ERRORS, RECEIVE_DESKS} from '../actions/desk_actions';

const desksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DESKS:
      return action.desks;
    case RECEIVE_DESK:
      const newDesk = { [action.desk.id]: action.desk };
      return Object.assign({}, state, newDesk);
    default:
      return state;
  }

}

export default desksReducer;