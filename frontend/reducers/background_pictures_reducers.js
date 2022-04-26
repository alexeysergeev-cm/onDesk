import { defaultBackground } from "../store/default_background_pictures/defaultBackgroundPictures";

const defaultState = defaultBackground;
export default function backgroundPicturesReducer(state = defaultState, action) {
  return state;
}
