import { RECEIVE_PAPER, REMOVE_PAPER } from '../actions/list_actions';
import { RECEIVE_DESK } from '../actions/desk_actions';

const papersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  
  switch (action.type) {
    case RECEIVE_PAPER:
      nextState[action.paper.id] = action.paper
      return nextState
    case REMOVE_PAPER:
      delete nextState[action.paperId]
      return nextState
    case RECEIVE_DESK: //show desk with all papers
    // debugger
      return Object.assign(nextState, action.payload.papers)
    default:
      return state;
  }

}

export default papersReducer;