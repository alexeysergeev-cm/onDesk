import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import ui from "./ui_reducer";
import membershipReducer from "./desk_membership_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: ui,
  deskMembership: membershipReducer,
});

export default rootReducer;
