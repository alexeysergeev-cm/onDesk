import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_DESK } from '../actions/desk_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  
  switch (action.type) {
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment
      return nextState
    case REMOVE_COMMENT:
      delete nextState[action.commentId]
      return nextState
    case RECEIVE_DESK: //show desk with all papers
      return Object.assign(nextState, action.payload.comments)
    default:
      return state;
  }

}

export default commentsReducer;