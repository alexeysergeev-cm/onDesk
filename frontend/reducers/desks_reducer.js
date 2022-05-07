import { RECEIVE_DESK, RECEIVE_DESKS, REMOVE_DESK, DESK_SYNC } from '../actions/desk_actions';

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
    case DESK_SYNC:
      console.log(nextState[action.data.desk_id].list_order, "nextState");
      console.log(action.data.list_order, 'action.data')
      const desk = nextState[action.data.desk_id]
      desk.title = action.data.title;
      desk.list_order = action.data.list_order;
      console.log(nextState[action.data.desk_id].list_order, "desk");
      console.log(nextState, "desk state");
      return nextState;
    default:
      return state;
  }

}

export default desksReducer;