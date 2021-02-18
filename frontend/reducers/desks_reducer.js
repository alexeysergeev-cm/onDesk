import { RECEIVE_DESK, RECEIVE_DESKS, REMOVE_DESK, } from '../actions/desk_actions';

const desksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_DESKS:
      return action.desks;
    case RECEIVE_DESK:
      // const newDesk = { [action.desk.id]: action.desk };
      // return Object.assign({}, state, newDesk);
      nextState[action.desk.id] = action.desk;
      return nextState
      // return action.desk
    case REMOVE_DESK:
      delete nextState[action.deskId]
    default:
      return state;
  }

}

export default desksReducer;