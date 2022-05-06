import { RECEIVE_PAPER, REMOVE_PAPER } from "../actions/paper_actions";
import { RECEIVE_DESK } from "../actions/desk_actions";
import { RECEIVE_TWO_LISTS } from "../actions/list_actions";

const papersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PAPER:
      nextState[action.paper.id] = action.paper;
      return nextState;
    case REMOVE_PAPER:
      delete nextState[action.paperId];
      return nextState;
    case RECEIVE_DESK:
      return Object.assign({}, action.payload.papers);
    case RECEIVE_TWO_LISTS:
      const paper = action.payload.data.paper;
      nextState[paper.id] = paper;
      return nextState;
    default:
      return state;
  }
};

export default papersReducer;
