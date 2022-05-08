import { RECEIVE_LIST_ERROR } from "../../actions/list_actions";
import { CLEAR_ERRORS } from "../../actions/clear_errors_actions";

const listErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_LIST_ERROR:
      return action.error;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default listErrorsReducer;
