import { combineReducers } from 'redux';
import modal from './modal_reducer';
import defaultBackgroundPictures from './background_pictures_reducers'

export default combineReducers({
  modal,
  defaultBackgroundPictures,
});
