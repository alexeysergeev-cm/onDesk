import { RECEIVE_DESK, RECEIVE_DESKS, REMOVE_DESK, } from '../actions/desk_actions';

const desksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_DESKS:
      return action.desks;
    case RECEIVE_DESK:   
      return {[action.payload.desk.id]: action.payload.desk}
    case REMOVE_DESK:
      delete nextState[action.deskId]
      return nextState
    default:
      return state;
  }

}

export default desksReducer;