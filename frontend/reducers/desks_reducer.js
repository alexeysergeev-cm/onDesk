import { RECEIVE_DESK, RECEIVE_DESK_ERRORS, RECEIVE_DESKS, REMOVE_DESK, } from '../actions/desk_actions';

const desksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_DESKS:
      debugger
      return action.desks;
    case RECEIVE_DESK:
      const newDesk = { [action.desk.id]: action.desk };
      return Object.assign({}, state, newDesk);
    case REMOVE_DESK:
      delete nextState[action.deskId]
    default:
      return state;
  }

}

export default desksReducer;