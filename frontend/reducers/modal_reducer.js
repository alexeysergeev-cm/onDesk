import { OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions'

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      // let key = Object.keys(action.modal)
      return action.modal;
      // return key[0];
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}